import { JSONSchema7 } from 'json-schema';

export interface FormostJsonSchema7Layout {
    row?: number;
    col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    colSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface FormostJsonSchema7UiHint {
    enumStyle?: "dropdown" | "listbox" | "options" | "optionsList" | "optionsGrid";
    cssClass?: string;
    rows?: number;
}

export type FormostJsonSchema7Definition = FormostJsonSchema7 | boolean;

export interface FormostJsonSchema7 extends JSONSchema7 {
    items?: FormostJsonSchema7Definition | FormostJsonSchema7Definition[];
    additionalItems?: FormostJsonSchema7Definition;
    contains?: FormostJsonSchema7;

    properties?: {
        [key: string]: FormostJsonSchema7Definition;
    };
    patternProperties?: {
        [key: string]: FormostJsonSchema7Definition;
    };
    additionalProperties?: FormostJsonSchema7Definition;
    dependencies?: {
        [key: string]: FormostJsonSchema7Definition | string[];
    };
    propertyNames?: FormostJsonSchema7Definition;

    if?: FormostJsonSchema7Definition;
    then?: FormostJsonSchema7Definition;
    else?: FormostJsonSchema7Definition;

    allOf?: FormostJsonSchema7Definition[];
    anyOf?: FormostJsonSchema7Definition[];
    oneOf?: FormostJsonSchema7Definition[];
    not?: FormostJsonSchema7Definition;

    definitions?: {
        [key: string]: FormostJsonSchema7Definition;
    };

    $layout?: FormostJsonSchema7Layout;
    $uiHint?: FormostJsonSchema7UiHint;
}

/**

var x: JSONSchema7 = {
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
                "type": "string"
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


// */
