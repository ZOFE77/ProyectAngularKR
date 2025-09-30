import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteBComponent } from './componente-b/componente-b.component';

// Definición de rutas del Módulo B
const routes: Routes = [
  { 
    path: 'componente-b', // URL final: /modulo-b/componente-b
    component: ComponenteBComponent // Componente que se mostrará en esta ruta
  }
];

@NgModule({
  imports: [
    // forChild porque este es un módulo hijo, no el principal
    RouterModule.forChild(routes)
  ],
  exports: [
    // Exportamos RouterModule para que esté disponible en ModuloB
    RouterModule
  ]
})
export class ModuloBRoutingModule { }
