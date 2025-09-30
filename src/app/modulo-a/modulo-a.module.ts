import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes como ngIf, ngFor
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ModuloARoutingModule } from './modulo-a-routing.module';

@NgModule({
  declarations: [
    // Aquí se declaran los componentes que pertenecen a este módulo
    ComponenteAComponent
  ],
  imports: [
    // CommonModule es necesario para usar directivas básicas de Angular
    CommonModule,
    // Importamos el módulo de rutas específico para ModuloA
    ModuloARoutingModule
  ]
})
export class ModuloAModule { }
