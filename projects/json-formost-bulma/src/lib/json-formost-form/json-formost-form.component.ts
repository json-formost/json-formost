import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, Validators, ValidationErrors, AbstractControl } from "@angular/forms";
import { FormGroup } from '../../../../json-formost-core/src/lib/controls/form-group';
import { FormostJsonSchema7 } from '../../../../json-formost-core/src/lib/formost-json-schema-7.interface';
import { SchemaConverterService } from '../../../../json-formost-core/src/lib/formost-schema-converter.service';

@Component({
  selector: 'formost-form',
  templateUrl: './json-formost-form.component.html',
  styleUrls: ['./json-formost-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JsonFormostFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => JsonFormostFormComponent),
      multi: true
    }
  ]
})
export class JsonFormostFormComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() schema: string | FormostJsonSchema7;

  public formostForm: FormGroup;

  // form: FormGroup;
  payLoad = '';

  constructor(private fbs: SchemaConverterService) { }

  ngOnInit() {
    if (!this.schema) throw "The schema input must be specified for JsonFormComponent!";

    this.formostForm = this.fbs.getFormostForm(this.schema);
    // this.form = this.qcs.toForm(this.formRoot);
    // this.payLoad = JSON.stringify(this.formostForm.getRawValue());
    console.info('JsonFormComponent::ngOnInit', this.formostForm);

  }

  ngOnChanges() {
    // console.info('Qs', this.questions);
    // this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.formostForm.getRawValue());
  }

  public onTouched: () => void = () => { };

  // ControlValueAccessor implementation
  writeValue(val: any): void {
    val && this.formostForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    // console.log("Formost on change");
    this.formostForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    // console.log("Formost on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // console.log("Formost setDisabled", isDisabled);
    isDisabled ? this.formostForm.disable() : this.formostForm.enable();
  }

  // Validators implementation
  validate(control: AbstractControl): ValidationErrors {
    // console.log("Formost validation");
    return this.formostForm.valid ? null : { invalidForm: { valid: false, message: "Form fields are invalid" } };
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }

}
