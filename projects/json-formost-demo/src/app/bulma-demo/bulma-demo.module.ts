import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormostCoreModule } from '../../../../json-formost-core/src/lib/json-formost-core.module';
import { JsonFormostArrayComponent } from '../../../../json-formost-bulma/src/lib/json-formost-array/json-formost-array.component';
import { JsonFormostGroupComponent } from '../../../../json-formost-bulma/src/lib/json-formost-group/json-formost-group.component';
import { JsonFormostControlComponent } from '../../../../json-formost-bulma/src/lib/json-formost-control/json-formost-control.component';
import { JsonFormostFormComponent } from '../../../../json-formost-bulma/src/lib/json-formost-form/json-formost-form.component';
import { BulmaDemoComponent } from '../bulma-demo/bulma-demo.component';

@NgModule({
    declarations: [
        JsonFormostArrayComponent, 
        JsonFormostGroupComponent, 
        JsonFormostControlComponent, 
        JsonFormostFormComponent,
        BulmaDemoComponent, 
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        JsonFormostCoreModule,
    ],
    exports: [
        // JsonFormostArrayComponent, 
        // JsonFormostGroupComponent, 
        // JsonFormostControlComponent, 
        // JsonFormostFormComponent
    ]
})
export class BulmaDemoModule { }
