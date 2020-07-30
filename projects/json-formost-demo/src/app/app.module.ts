import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BulmaDemoModule } from './bulma-demo/bulma-demo.module';
import { Bootstrap4DemoModule } from './bootstrap4-demo/bootstrap4-demo.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BulmaDemoModule,
    Bootstrap4DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
