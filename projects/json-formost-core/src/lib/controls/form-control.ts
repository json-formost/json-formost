import { FormControl as NgFormControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { FormostAbstractControl } from '../formost-abstract-control.interface';
import { populateInterfaceProperties } from '../util';

export class FormControl<T = any, E extends object = any> extends NgFormControl implements FormostAbstractControl {
    readonly value: T;

    constructor(formState?: any,
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(formState, validatorOrOpts, asyncValidator);
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
        if (this.type == 'string' && this.contentMediaType == 'text/html') { return 'richtext'; }
        if (this.type == 'string' && this.contentMediaType == 'text/markdown') { return 'markdown'; }
        return 'input';
    };
    get inputType(): string {
        if (this.uiType == 'input') {
            if (this.type == 'number' || this.type == 'integer') { return 'number'; }
            if (this.type == 'string' && this.format == 'date-time') { return 'datetime-local'; }
            if (this.type == 'string' && this.format == 'date') { return 'date'; }
            if (this.type == 'string' && this.format == 'time') { return 'number'; }
            if (this.type == 'string' && this.format == 'email') { return 'email'; }
            if (this.type == 'string' && this.format == 'uri') { return 'url'; }
            if (this.type == 'string') { return 'text'; }
        }
        return null;
    }

    enum?: any[];

    // type: string
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: 'date-time' | 'time' | 'date' | 'email' | 'idn-email' |
        'hostname' | 'idn-hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uri-reference' |
        'iri' | 'iri-reference' | 'uri-template' | 'json-pointer' | 'relative-json-pointer' |
        'regex';
    contentEncoding?: '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';
    contentMediaType?: string;

    // type: number
    multipleOf?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maximum?: number;
    exclusiveMaximum?: number;

    populate(source: object) {
        populateInterfaceProperties(this, source, ['type', 'required', 'enum', 'minLength', 'maxLength', 'pattern', 'format', 'contentEncoding', 'contentMediaType', 'multipleOf', 'minimum', 'exclusiveMinimum', 'maximum', 'exclusiveMaximum']);
    }

    getControlType(): 'control' | 'group' | 'array' {
        return 'control';
    }
}  