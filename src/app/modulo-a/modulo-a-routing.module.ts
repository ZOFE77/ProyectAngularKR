import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './componente-a/componente-a.component';

// Definición de rutas del Módulo A
const routes: Routes = [
  { 
    path: 'componente-a', // URL final: /modulo-a/componente-a
    component: ComponenteAComponent // Componente que se mostrará en esta ruta
  }
];

@NgModule({
  imports: [
    // forChild porque este es un módulo hijo, no el principal
    RouterModule.forChild(routes)
  ],
  exports: [
    // Exportamos RouterModule para que esté disponible en ModuloA
    RouterModule
  ]
})
export class ModuloARoutingModule { }
