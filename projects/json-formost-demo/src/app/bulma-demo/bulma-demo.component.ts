import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bulma-demo',
  templateUrl: './bulma-demo.component.html',
  styleUrls: ['./bulma-demo.component.scss']
})
export class BulmaDemoComponent implements OnInit {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDemoForm();
  }

  loadDemoForm() {
    const itemData: any = {
      createdAt: new Date().toISOString(),
      createdBy: 'demo@example.com'
    };

    this.demoForm = this.fb.group({
      id: [itemData.id],
      content: [null], //  this.fbsvc.getFormostAbstractControl(this.schema),
      // content: [itemData.content],
      // contentObject: [itemData.content ? JSON.parse(itemData.content) : null],
      createdBy: [itemData.createdBy],
      createdAt: [itemData.createdAt],
    });
    console.info('loadItemForm::itemForm...', this.demoForm);
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
      "favorites": {
        "type": "array",
        "items": {
          "name": "addressType",
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
  }`;
}
