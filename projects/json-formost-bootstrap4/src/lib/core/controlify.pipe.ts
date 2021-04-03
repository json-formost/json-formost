import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Pipe({
  name: 'controlify'
})
export class ControlifyPipe implements PipeTransform {

  constructor(private fb: FormBuilder) { }

  transform(enums: any[], ...args: unknown[]): unknown {
    const arr = enums.map(e => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }

}
