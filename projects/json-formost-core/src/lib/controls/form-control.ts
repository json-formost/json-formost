import { FormControl as NgFormControl, Validators, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { FormostAbstractControl } from '../formost-abstract-control.interface';
import { populateInterfaceProperties } from '../util';

export class FormControl<T = any, E extends object = any> extends NgFormControl implements FormostAbstractControl {
    readonly value: T;

    constructor(source, formState?: any) {
        super(formState, null, null);
        populateInterfaceProperties(this, source, ['type', 'required', 'enum', 'minLength', 'maxLength', 'pattern', 'format', 'contentEncoding', 'contentMediaType', 'multipleOf', 'minimum', 'exclusiveMinimum', 'maximum', 'exclusiveMaximum']);
        this.setValidators(this.getValidators());
    }

    // from interface
    name: string;
    refid: string;
    title?: string;
    description?: string;
    help?: string;

    // Form Control properties

    type: 'string' | 'boolean' | 'number' | 'integer' | null;
    required?: boolean;
    get uiType(): string {
        if (this.type == 'string' && this.enum) { return 'dropdown'; }
        if (this.type == 'boolean') { return 'checkbox'; }
        // if (this.type == 'string' && (this.minLength > 99 || this.maxLength > 99)) { return 'bigtext'; }
        if (this.type == 'string' && this.contentMediaType && this.contentMediaType.startsWith('text/')) { return 'textarea'; }
        // if (this.type == 'string' && this.contentMediaType == 'text/html') { return 'richtext'; }
        // if (this.type == 'string' && this.contentMediaType == 'text/markdown') { return 'markdown'; }
        return 'input';
    };
    get inputType(): string {
        if (this.uiType == 'input') {
            if (this.type == 'number' || this.type == 'integer') { return 'number'; }
            if (this.type == 'string' && this.format == 'date-time') { return 'datetime-local'; }
            if (this.type == 'string' && this.format == 'date') { return 'date'; }
            if (this.type == 'string' && this.format == 'time') { return 'time'; }
            if (this.type == 'string' && this.format == 'email') { return 'email'; }
            if (this.type == 'string' && this.format == 'uri') { return 'url'; }
            if (this.type == 'string') { return 'text'; }
        }
        if (this.uiType == 'textarea') { return this.contentMediaType.substr(5); }
        return null;
    }

    enum?: any[];

    // type: string
    minLength?: number = null;
    maxLength?: number = null;
    pattern?: string = null;
    format?: 'date-time' | 'time' | 'date' | 'email' | 'idn-email' |
        'hostname' | 'idn-hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uri-reference' |
        'iri' | 'iri-reference' | 'uri-template' | 'json-pointer' | 'relative-json-pointer' |
        'regex';
    contentEncoding?: '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';
    contentMediaType?: string = null;

    // type: number
    multipleOf?: number = null;
    minimum?: number = null;
    exclusiveMinimum?: number = null;
    maximum?: number = null;
    exclusiveMaximum?: number = null;

    getControlType(): 'control' | 'group' | 'array' {
        return 'control';
    }

    getValidators() {
        const validators = [];
        if (this.required)
            validators.push(Validators.required);

        if (this.type == 'string') {
            if (this.minLength !== null)
                validators.push(Validators.minLength(this.minLength));
            if (this.maxLength !== null)
                validators.push(Validators.minLength(this.maxLength));
            if (this.pattern !== null)
                validators.push(Validators.pattern(this.pattern));
            if (this.format == "email")
                validators.push(Validators.email);
        }

        if (this.type == 'number') {
            if (this.minimum !== null)
                validators.push(Validators.min(this.minimum));
            if (this.maximum !== null)
                validators.push(Validators.max(this.maximum));
        }

        console.info(name, validators);

        return validators;
    }
}  