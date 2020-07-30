import { FormGroup as NgFormGroup, AbstractControl } from '@angular/forms';
import { FormostAbstractControl } from '../formost-abstract-control.interface';
import { populateInterfaceProperties } from '../util';

export class FormGroup<T extends object = any> extends NgFormGroup implements FormostAbstractControl {
    readonly value: T;

    constructor(
        public controls: { [key: string]: AbstractControl },
    ) {
        //super(controls, validatorOrOpts, asyncValidator);
        super(controls);
    }

    // from interface
    name: string;
    refid: string;
    title?: string;
    description?: string;
    help?: string;

    populate(source: object) {
        populateInterfaceProperties(this, source, []);
    }

    getControlType(): "control" | "group" | "array" {
        return 'group';
    }
}