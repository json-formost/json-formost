import { NgModule } from '@angular/core';
import { JsonFormostArrayComponent } from './json-formost-array/json-formost-array.component';
import { JsonFormostGroupComponent } from './json-formost-group/json-formost-group.component';
import { JsonFormostControlComponent } from './json-formost-control/json-formost-control.component';
import { JsonFormostFormComponent } from './json-formost-form/json-formost-form.component';



@NgModule({
  declarations: [JsonFormostArrayComponent, JsonFormostGroupComponent, JsonFormostControlComponent, JsonFormostFormComponent],
  imports: [
  ],
  exports: [JsonFormostArrayComponent, JsonFormostGroupComponent, JsonFormostControlComponent, JsonFormostFormComponent]
})
export class JsonFormostBootstrap4Module { }
