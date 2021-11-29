import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoCreationComponent } from './departamento/departamento-creation/departamento-creation.component';
import { DepartamentoEditionComponent } from './departamento/departamento-edition/departamento-edition.component';
import { DepartamentoListComponent } from './departamento/departamento-list/departamento-list.component';
import { RemoveDepartamentoComponent } from './departamento/remove-departamento/remove-departamento.component';
import { FacultadCreationComponent } from './facultad/facultad-creation/facultad-creation.component';
import { FacultadEditionComponent } from './facultad/facultad-edition/facultad-edition.component';
import { FacultadListComponent } from './facultad/facultad-list/facultad-list.component';
import { RemoveFacultadComponent } from './facultad/remove-facultad/remove-facultad.component';
import { RemoveTrabajoComponent } from './general/remove-trabajo/remove-trabajo.component';
import { TrabajoCreationComponent } from './general/trabajo-creation/trabajo-creation.component';
import { TrabajoEditionComponent } from './general/trabajo-edition/trabajo-edition.component';
import { TrabajoListComponent } from './general/trabajo-list/trabajo-list.component';
import { RemoveVinculacionComponent } from './vinculacion/remove-vinculacion/remove-vinculacion.component';
import { VinculacionCreationComponent } from './vinculacion/vinculacion-creation/vinculacion-creation.component';
import { VinculacionEditionComponent } from './vinculacion/vinculacion-edition/vinculacion-edition.component';
import { VinculacionListComponent } from './vinculacion/vinculacion-list/vinculacion-list.component';

const routes: Routes = [
  {
    path: 'trabajo-creation',
    component: TrabajoCreationComponent,
  },
  {
    path: 'trabajo-edition',
    component: TrabajoEditionComponent,
  },
  {
    path: 'trabajo-list',
    component: TrabajoListComponent,
  },
  {
    path: 'remove-trabajo',
    component: RemoveTrabajoComponent,
  },
  {
    path: 'vinculacion-creation',
    component: VinculacionCreationComponent,
  },
  {
    path: 'vinculacion-edition',
    component: VinculacionEditionComponent,
  },
  {
    path: 'vinculacion-list',
    component: VinculacionListComponent,
  },
  {
    path: 'remove-vinculacion',
    component: RemoveVinculacionComponent,
  },
  {
    path: 'facultad-creation',
    component: FacultadCreationComponent,
  },
  {
    path: 'facultad-edition',
    component: FacultadEditionComponent,
  },
  {
    path: 'facultad-list',
    component: FacultadListComponent,
  },
  {
    path: 'remove-facultad',
    component: RemoveFacultadComponent,
  },
  {
    path: 'departamento-creation',
    component: DepartamentoCreationComponent,
  },
  {
    path: 'departamento-edition',
    component: DepartamentoEditionComponent,
  },
  {
    path: 'departamento-list',
    component: DepartamentoListComponent,
  },
  {
    path: 'remove-departamento',
    component: RemoveDepartamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajoRoutingModule {}
