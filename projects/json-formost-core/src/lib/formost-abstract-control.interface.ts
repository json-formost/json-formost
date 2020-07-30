import { AbstractControl } from '@angular/forms';

export interface FormostAbstractControl extends AbstractControl {
    name: string;
    refid: string;
    title?: string;
    description?: string;
    help?: string;

    populate(source: object);

    getControlType(): 'control' | 'group' | 'array';
}
