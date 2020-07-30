import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormostBootstrap4Module } from '../../../../json-formost-bootstrap4/src/public-api';
import { Bootstrap4DemoComponent } from './bootstrap4-demo.component';

@NgModule({
    declarations: [
        Bootstrap4DemoComponent, 
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        JsonFormostBootstrap4Module,
    ],
    exports: [
    ]
})
export class Bootstrap4DemoModule { }
