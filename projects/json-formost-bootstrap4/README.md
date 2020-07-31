# JSON Formost - Bootstrap4

JSON Formost for Bootstrap4 is a set of Angular components that convert a JSON Schema (v7) into an Angular Reactive Form.

*This tool is functional but **unfinished** and subject to significant refactoring with breaking changes as of July 31, 2020.*

## Example Angular Html
```
<form [formGroup]="demoForm" (ngSubmit)="onSubmit()">
    <formost-form [schema]="schemaString" formControlName="subform"></formost-form>
    <button type="submit" class="btn btn-primary">Save</button>
</form>
```

## Example Angular TypeScript
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bootstrap4-demo',
  templateUrl: './bootstrap4-demo.component.html',
  styleUrls: ['./bootstrap4-demo.component.scss']
})
export class Bootstrap4DemoComponent implements OnInit {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDemoForm();
  }

  loadDemoForm() {

    this.demoForm = this.fb.group({
      subform: [null],
    });

  }

  onSubmit() {
    console.info('demoForm Data', this.demoForm.value);
  }

  schemaString = `{
    "title": "People",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 3,
        "description": "Please enter your name"
      },
      "vegetarian": {
        "type": "boolean",
        "title": "Are you a vegetarian?"
      },
      "birthDate": {
        "type": "string",
        "format": "date"
      },
      "nationality": {
        "type": "string",
        "enum": [
          "DE",
          "IT",
          "JP",
          "US",
          "RU",
          "Other"
        ]
      },
    },
    "required": [
      "nationality"
    ]
  }`;
}
```
