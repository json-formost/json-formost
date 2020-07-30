import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormostBulmaModule } from '../../../../json-formost-bulma/src/lib/json-formost-bulma.module';
import { BulmaDemoComponent } from '../bulma-demo/bulma-demo.component';

@NgModule({
    declarations: [
        BulmaDemoComponent, 
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        JsonFormostBulmaModule
    ],
    exports: [
    ]
})
export class BulmaDemoModule { }
