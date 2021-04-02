import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '../../../../json-formost-core/src/public-api';
import { FormGroup, FormControl } from '../core';
import { FormBuilder } from '@angular/forms';
// import { FormGroup, FormControl } from '@json-formost/core';

@Component({
  selector: 'formost-form-control',
  templateUrl: './json-formost-control.component.html',
  styleUrls: ['./json-formost-control.component.css']
})
export class JsonFormostControlComponent implements OnInit {
  @Input() control: FormControl;
  @Input() form: FormGroup;
  @Input() fromArray = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getEnumOptionControl(value: string) {
    let schema = {
      "type": "boolean"
    };

    return new FormControl(schema, value)
  }

  trackByFn(index: any, item: any) {
    return index;
 }
}
