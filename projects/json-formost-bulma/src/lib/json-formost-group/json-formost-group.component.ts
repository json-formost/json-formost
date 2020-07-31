import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, keyValueSorters } from '../../../../json-formost-core/src/public-api';
import { FormGroup, keyValueSorters } from 'json-formost-core';

@Component({
  selector: 'formost-form-group',
  templateUrl: './json-formost-group.component.html',
  styleUrls: ['./json-formost-group.component.css']
})
export class JsonFormostGroupComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() group: FormGroup;
  @Input() fromArray = false;

  public originalOrder = keyValueSorters.originalOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
