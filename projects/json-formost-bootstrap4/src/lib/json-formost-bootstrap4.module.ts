import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormostArrayComponent } from './json-formost-array/json-formost-array.component';
import { JsonFormostGroupComponent } from './json-formost-group/json-formost-group.component';
import { JsonFormostControlComponent } from './json-formost-control/json-formost-control.component';
import { JsonFormostFormComponent } from './json-formost-form/json-formost-form.component';
import { RowifyPipe } from './core/rowify.pipe';


@NgModule({
  declarations: [
    JsonFormostArrayComponent, 
    JsonFormostGroupComponent, 
    JsonFormostControlComponent, 
    JsonFormostFormComponent,
    RowifyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    JsonFormostArrayComponent, 
    JsonFormostGroupComponent, 
    JsonFormostControlComponent, 
    JsonFormostFormComponent,
    RowifyPipe
  ]
})
export class JsonFormostBootstrap4Module { }
