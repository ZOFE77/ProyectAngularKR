
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './modulo-a/componente-a/componente-a.component';
import { ComponenteBComponent } from './modulo-b/componente-b/componente-b.component';

const routes: Routes = [
  { path: 'componente-a', component: ComponenteAComponent },
  { path: 'componente-b', component: ComponenteBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
