import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './puplic/error/not-found/not-found.component';
import { HomeComponent } from './puplic/general/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./modules/security/security.module').then(
        (x) => x.SecurityModule
      ),
  },
  {
    path: 'jurados>',
    loadChildren: () =>
      import('./modules/jurados/jurados.module').then((x) => x.JuradosModule),
  },
  {
    path: 'solicitud',
    loadChildren: () =>
      import('./modules/solicitud/solicitud.module').then(
        (x) => x.SolicitudModule
      ),
  },
  {
    path: 'proponente-trabajo',
    loadChildren: () =>
      import('./modules/trabajo/trabajo.module').then((x) => x.TrabajoModule),
  },
  {
    path: 'evalucion',
    loadChildren: () =>
      import('./modules/evaluacion/evaluacion.module').then(
        (x) => x.EvaluacionModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
