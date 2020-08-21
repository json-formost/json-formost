import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { SchemaConverterService, FormostJsonSchema7 } from '../../../../../common/formost-core/public-api';
import { JsonFormostFormComponent, SchemaConverterService, FormostJsonSchema7 } from 'json-formost-bootstrap4';

@Component({
  selector: 'app-bootstrap4-demo',
  templateUrl: './bootstrap4-demo.component.html',
  styleUrls: ['./bootstrap4-demo.component.scss']
})
export class Bootstrap4DemoComponent implements OnInit {
  demoForm: FormGroup;
  schemaForm: FormGroup;
  tab = 'form';
  @ViewChild(JsonFormostFormComponent) demoSubForm: JsonFormostFormComponent;

  constructor(private fb: FormBuilder, private schemaSvc: SchemaConverterService) { }

  ngOnInit(): void {
    this.loadDemoForm();
    this.loadSchemaForm();
  }

  loadDemoForm(data?: any) {
    if (!data) {
      data = {
        createdAt: new Date().toISOString(),
        createdBy: 'demo@example.com'
      };
    }

    this.demoForm = this.fb.group({
      id: [data.id],
      content: [null], //  this.fbsvc.getFormostAbstractControl(this.schema),
      // content: [itemData.content],
      // contentObject: [itemData.content ? JSON.parse(itemData.content) : null],
      createdBy: [data.createdBy],
      createdAt: [data.createdAt],
    });
    // console.info('loadItemForm::itemForm...', this.demoForm);
  }

  loadSchemaForm() {
    this.schemaForm = this.fb.group({
      schema: [{ skema: JSON.stringify(this.schema, null, 2) }]
    });
  }

  showTab(e, tab) {
    e.preventDefault();
    this.tab = tab;
  }

  handleSave(ev) {
    ev.preventDefault();
    this.onSubmit();
  }

  handleReset(ev) {
    ev.preventDefault();
    this.loadDemoForm();
  }

  onSubmit() {
    console.info('DATA', this.demoForm.value);
  }

  onSchemaSubmit() {
    console.info('DATA', this.schemaForm.value);
    //this.demoForm.
    this.demoSubForm.formostForm = this.schemaSvc.getFormostForm(this.schemaForm.value.schema.skema);
    this.loadDemoForm();
    this.tab = 'form';
  }

  schema: FormostJsonSchema7 = {
    "title": "People",
    "type": "object",
    "properties": {
      "fname": {
        "title": "First Name",
        "type": "string",
        "minLength": 3,
        "description": "Please enter your first name",
        "$layout": {row: 99}
      },
      "lname": {
        "title": "Last Name",
        "type": "string",
        "minLength": 3,
        "description": "Please enter your last name",
        "$layout": {row: 75}
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
      "favorites": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "address": {
              "type": "string"
            }
          }
        },
        "uniqueItems": true,
        "default": []
      },
      "personalData": {
        "type": "object",
        "properties": {
          "age": {
            "type": "integer",
            "description": "Please enter your age."
          },
          "height": {
            "type": "number"
          },
          "drivingSkill": {
            "type": "number",
            "maximum": 10,
            "minimum": 1,
            "default": 7
          }
        },
        "required": [
          "age",
          "height"
        ]
      },
      "occupation": {
        "enum": [
          "doctor",
          "lawyer"
        ],
        "type": "string"
      },
      "postalCode": {
        "type": "string",
        "maxLength": 5
      }
    },
    "required": [
      "occupation",
      "nationality"
    ]
  };

  schemaSchema: FormostJsonSchema7 = {
    "title": "Schema Schema",
    "type": "object",
    "properties": {
      "skema": {
        "type": "string",
        "title": "Schema",
        "description": "Update this schema then switch back to the Form tab to see results.",
        "contentMediaType": "text/plain",
        "minLength": 100
      }
    }
  };
}
