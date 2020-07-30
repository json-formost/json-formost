import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { JsonFormostCoreModule } from '../../../json-formost-core/src/lib/json-formost-core.module';
// import { ControlKeyValuePipe } from '../../../json-formost-core/src/lib/pipes/control-key-value.pipe';
// import { JsonFormostBulmaModule } from '../../../json-formost-bulma/src/lib/json-formost-bulma.module';
// import { JsonFormostBootstrap4Module } from '../../../json-formost-bootstrap4/src/lib/json-formost-bootstrap4.module';
import { BulmaDemoModule } from './bulma-demo/bulma-demo.module';
// import { Bootstrap4DemoComponent } from './bootstrap4-demo/bootstrap4-demo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // ControlKeyValuePipe,
    // Bootstrap4DemoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // JsonFormostCoreModule,
    BulmaDemoModule,
    // JsonFormostBulmaModule,
    // JsonFormostBootstrap4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
