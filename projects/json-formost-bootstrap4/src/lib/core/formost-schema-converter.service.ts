import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { FormostAbstractControl } from './formost-abstract-control.interface';
import { FormGroup } from './controls/form-group';
import { FormArray } from './controls/form-array';
import { FormControl } from './controls/form-control';
import { FormostJsonSchema7 } from './formost-json-schema-7.interface';

@Injectable({
  providedIn: 'root'
})
export class SchemaConverterService {

  constructor() { }

  getFormostForm(schema: FormostJsonSchema7 | string): FormGroup {
    let formItems: FormostAbstractControl = this.getFormItems(schema, "#");

    if (formItems instanceof FormGroup)
      return formItems;
    else {
      return new FormGroup({}, { formost: formItems });
    }
  }

  getFormostForm$(schema: FormostJsonSchema7 | string): Observable<FormGroup> {
    return of(this.getFormostForm(schema));
  }

  getFormostAbstractControl(schema: FormostJsonSchema7 | string, refId = "#"): FormostAbstractControl {
    let formItems: FormostAbstractControl = this.getFormItems(schema, refId);
    return formItems;
  }

  getFormostAbstractControl$(schema: FormostJsonSchema7 | string, refId = "#"): Observable<FormostAbstractControl> {
    return of(this.getFormostAbstractControl(schema, refId));
  }

  private getFormItems(schema: FormostJsonSchema7 | string, refId = "#"): FormostAbstractControl {
    const schemaObj: FormostJsonSchema7 = typeof schema === 'string' ? JSON.parse(schema) : schema;

    if (!schemaObj) { this.logMsg('NO-OBJECT', "warn", schemaObj); return {} as FormostAbstractControl; }
    if (!schemaObj.type) { this.logMsg('NO-TYPE', "warn", schemaObj); return {} as FormostAbstractControl; }

    let formItems: FormostAbstractControl;
    switch (schemaObj.type) {
      case 'null':
        return null;
      case 'object':
        formItems = this.getFormGroup(schemaObj, refId); break;
      case 'array':
        formItems = this.getFormArray(schemaObj, refId); break;
      default:
        formItems = this.getFormControl(schemaObj, refId); break;
    }

    return formItems;
  }

  private getFormControl(obj: FormostJsonSchema7, refId: string): FormControl {
    const item = new FormControl(obj);
    // formCtl.populate(obj);
    if (refId) { item.refid = refId; }
    if (obj.enum && obj.enum.length) {
      item.optionsArray = new FormArray(obj, [], this);
      for (let i = 0; i < obj.enum.length; i++) {
        let optVal = obj.enum[i];
        let optCtl = new FormControl(obj, optVal);
        item.optionsArray.push(optCtl);
      }
      console.info(`optionsArray for ${refId}`, item.optionsArray);
    }
    return item;
  }

  private getFormGroup(obj: FormostJsonSchema7, refId: string): FormGroup {
    const reqArr: Array<string> = obj.required || [];
    const item = new FormGroup(obj, {});
    if (refId) { item.refid = refId; }
    for (const prop in obj.properties) {
      if (obj.properties.hasOwnProperty(prop)) {
        const unknownField = obj.properties[prop] as any;
        unknownField.name = prop;
        if (reqArr.indexOf(prop) > -1) { unknownField.required = true; }

        const knownField = this.getFormItems(unknownField, `${refId}/fields/${prop}`);
        //item.fields.push(knownField);
        item.addControl(prop, knownField);
      }
    }
    return item;
  }

  private getFormArray(obj: FormostJsonSchema7, refId: string): FormArray {
    const item = new FormArray(obj, [], this);
    if (refId) { item.refid = refId; }
    const allowedTypesArray = Array.isArray(obj.items)
      ? obj.items as FormostJsonSchema7[]
      : [obj.items as FormostJsonSchema7];
    // let i = 0;
    // for (const allowedType of allowedTypesArray) {
    //     // ++i;
    //     // allowedType.name = allowedType.name || `${obj.name ? obj.name + '-' : null}type-${i}`;
    //     // item.itemTypes.push(this.getFormItems(allowedType, `${refId}/itemTypes/${allowedType.name}`) as FormField);
    //     item.itemTypes.push(this.getFormItems(allowedType, `${refId}/itemTypes/[${i++}]`) as FormControl);
    // }
    item.itemTypes = allowedTypesArray;
    return item;
  }

  private logMsg(msg: string, level: "error" | "warn" | "info" = "info", data?: any) {
    switch (level) {
      case "error":
        console.error(msg, data);
        break;
      case "warn":
        console.warn(msg, data);
        break;
      default:
        console.info(msg, data);
        break;
    }
  }
}
