import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes como ngIf, ngFor
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ModuloBRoutingModule } from './modulo-b-routing.module';

@NgModule({
  declarations: [
    // Aquí se declaran los componentes que pertenecen a este módulo
    ComponenteBComponent
  ],
  imports: [
    // CommonModule es necesario para usar directivas básicas de Angular
    CommonModule,
    // Importamos el módulo de rutas específico para ModuloB
    ModuloBRoutingModule
  ]
})
export class ModuloBModule { }
