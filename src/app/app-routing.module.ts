import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definición de rutas principales de la aplicación
const routes: Routes = [
  {
    path: 'modulo-a', // URL: /modulo-a/...
    // Carga perezosa (lazy loading) del Módulo A
    // Solo se carga cuando se accede a una ruta que empiece con /modulo-a
    loadChildren: () => import('./modulo-a/modulo-a.module').then(m => m.ModuloAModule)
  },
  {
    path: 'modulo-b', // URL: /modulo-b/...
    // Carga perezosa (lazy loading) del Módulo B
    // Solo se carga cuando se accede a una ruta que empiece con /modulo-b
    loadChildren: () => import('./modulo-b/modulo-b.module').then(m => m.ModuloBModule)
  },
  { 
    path: '', // Ruta raíz (cuando la URL es /)
    redirectTo: '/modulo-a/componente-a', // Redirecciona a esta ruta
    pathMatch: 'full' // La coincidencia debe ser exacta
  }
];

@NgModule({
  imports: [
    // Configura el módulo de rutas principal (forRoot solo se usa una vez en la app)
    RouterModule.forRoot(routes)
  ],
  exports: [
    // Expone RouterModule para que esté disponible en toda la aplicación
    RouterModule
  ]
})
export class AppRoutingModule { }
