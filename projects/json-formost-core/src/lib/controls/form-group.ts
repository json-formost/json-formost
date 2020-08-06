import { FormGroup as NgFormGroup, AbstractControl } from '@angular/forms';
import { FormostAbstractControl } from '../formost-abstract-control.interface';
import { populateInterfaceProperties } from '../util';

export class FormGroup<T extends object = any> extends NgFormGroup implements FormostAbstractControl {
    readonly value: T;

    constructor(
        source,
        controls: { [key: string]: AbstractControl }
    ) {
        //super(controls, validatorOrOpts, asyncValidator);
        super(controls);
        populateInterfaceProperties(this, source, []);
    }

    // from interface
    name: string;
    refid: string;
    title?: string;
    description?: string;
    help?: string;

    getControlType(): "control" | "group" | "array" {
        return 'group';
    }
}