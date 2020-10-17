import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Pagina2Component } from './pagina2/pagina2.component';
import {Pagina3Component } from './pagina3/pagina3.component';

const routes: Routes = [
  {path:'pag2',component:Pagina2Component},
  {path:'pag3',component:Pagina3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
