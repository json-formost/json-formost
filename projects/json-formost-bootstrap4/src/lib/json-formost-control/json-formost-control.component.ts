import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../json-formost-core/src/public-api';

@Component({
  selector: 'formost-form-control',
  templateUrl: './json-formost-control.component.html',
  styleUrls: ['./json-formost-control.component.css']
})
export class JsonFormostControlComponent implements OnInit {
  @Input() control: FormControl;
  @Input() form: FormGroup;
  @Input() fromArray = false;

  constructor() { }

  ngOnInit(): void {
  }

}
