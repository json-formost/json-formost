import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowifyPipe } from './rowify.pipe';

@NgModule({
    declarations: [
        RowifyPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RowifyPipe
    ]
})
export class CoreModule { }
