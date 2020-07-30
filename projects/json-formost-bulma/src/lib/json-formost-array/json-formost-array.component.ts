import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormostJsonSchema7, SchemaConverterService } from '../../../../json-formost-core/src/public-api';

@Component({
  selector: 'formost-form-array',
  templateUrl: './json-formost-array.component.html',
  styleUrls: ['./json-formost-array.component.css']
})
export class JsonFormostArrayComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() array: FormArray;
  @Input() fromArray = false;

  private _index = 0;
  getNextIndex(): number {
    return this._index++;
  }

  constructor(private fbs: SchemaConverterService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  addItem(schema: FormostJsonSchema7) {
    const idx = this.getNextIndex();
    const ctl = this.fbs.getFormostAbstractControl(schema, `${this.array.refid}/itemTypes/${idx}`);
    ctl.name = this.array.name + '_' + idx;
    this.array.push(ctl);
  }

  removeItem(idx: number) {
    this.array.removeAt(idx);
  }

}
