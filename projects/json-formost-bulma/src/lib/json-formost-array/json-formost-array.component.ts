import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../../json-formost-core/src/lib/controls/form-group';
import { FormArray } from '../../../../json-formost-core/src/lib/controls/form-array';
import { FormostJsonSchema7 } from '../../../../json-formost-core/src/lib/formost-json-schema-7.interface';
import { SchemaConverterService } from '../../../../json-formost-core/src/lib/formost-schema-converter.service';

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
