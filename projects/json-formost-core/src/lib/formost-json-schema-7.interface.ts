import { JSONSchema7 } from 'json-schema';

export interface FormostJsonSchema7 extends JSONSchema7 {

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
