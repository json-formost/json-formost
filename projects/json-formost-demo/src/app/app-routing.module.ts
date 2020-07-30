import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BulmaDemoComponent } from './bulma-demo/bulma-demo.component';
import { Bootstrap4DemoComponent } from './bootstrap4-demo/bootstrap4-demo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bulma', component: BulmaDemoComponent },
  { path: 'bootstrap4', component: Bootstrap4DemoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
