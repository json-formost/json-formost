import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowifyPipe } from './rowify.pipe';
import { ControlifyPipe } from './controlify.pipe';

@NgModule({
    declarations: [
        RowifyPipe,
        ControlifyPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RowifyPipe,
        ControlifyPipe
    ]
})
export class CoreModule { }
