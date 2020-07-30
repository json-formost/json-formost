import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '../../../../json-formost-core/src/lib/controls/form-group';

@Component({
  selector: 'formost-form-group',
  templateUrl: './json-formost-group.component.html',
  styleUrls: ['./json-formost-group.component.css']
})
export class JsonFormostGroupComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() group: FormGroup;
  @Input() fromArray = false;

  constructor() { }

  ngOnInit(): void {
  }

}
