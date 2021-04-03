import { FormArray as NgFormArray, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { FormostAbstractControl } from '../formost-abstract-control.interface';
import { populateInterfaceProperties } from '../util';
import { FormostJsonSchema7 } from '../formost-json-schema-7.interface';
import { SchemaConverterService } from '../formost-schema-converter.service';

export class FormArray<T = any, E extends object = any> extends NgFormArray implements FormostAbstractControl {
    readonly value: T[];

    constructor(
        source,
        public controls: AbstractControl[],
        private fbs?: SchemaConverterService
    ) {
        super(controls, undefined, undefined);
        populateInterfaceProperties(this, source, [
            'uniqueItems', 'contains', 'additionalItems', 'minItems', 'maxItems']);
    }

    // From Interface
    name: string;
    refid: string;
    title?: string;
    description?: string;
    help?: string;

    itemTypes: FormostJsonSchema7[] = [];
    uniqueItems?: boolean;
    contains?: FormostAbstractControl;
    additionalItems: FormostAbstractControl | boolean = false;
    minItems?: number;
    maxItems?: number;

    getControlType(): "control" | "group" | "array" {
        return 'array';
    }

    setValue(value: any[], options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
        if (value && value.length > 0) {
            if (!this.fbs) throw 'Must supply FormBuilderService instance.';
            value.forEach(val => {
                const schema = this.itemTypes.length == 1
                    ? this.itemTypes[0]
                    : this.itemTypes.find(sch => sch.type == typeof val); // ToDo: better type matching
                // console.info("schema+val", schema, val);
                let ctl = this.fbs.getFormostAbstractControl(schema);
                this.push(ctl);
            });
        }

        super.setValue(value, options);
        // this._checkAllValuesPresent(value);
        // value.forEach((newValue: any, index: number) => {
        //   this._throwIfControlMissing(index);
        //   this.at(index).setValue(newValue, {onlySelf: true, emitEvent: options.emitEvent});
        // });
        // this.updateValueAndValidity(options);
    }
}  