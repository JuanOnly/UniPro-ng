import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelSolicitudComponent } from './general/cancel-solicitud/cancel-solicitud.component';
import { SolicitudCreationComponent } from './general/solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './general/solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './general/solicitud-list/solicitud-list.component';
import { ModalidadCreationComponent } from './modalidad/modalidad-creation/modalidad-creation.component';
import { ModalidadEditionComponent } from './modalidad/modalidad-edition/modalidad-edition.component';
import { ModalidadListComponent } from './modalidad/modalidad-list/modalidad-list.component';
import { RemoveModalidadComponent } from './modalidad/remove-modalidad/remove-modalidad.component';
import { RecordatoriosCreationComponent } from './recordatorios/recordatorios-creation/recordatorios-creation.component';
import { RecordatoriosEditionComponent } from './recordatorios/recordatorios-edition/recordatorios-edition.component';
import { RecordatoriosListComponent } from './recordatorios/recordatorios-list/recordatorios-list.component';
import { RemoveRecordatoriosComponent } from './recordatorios/remove-recordatorios/remove-recordatorios.component';
import { ComiteCreationComponent } from './tipo-comite/comite-creation/comite-creation.component';
import { ComiteEditionComponent } from './tipo-comite/comite-edition/comite-edition.component';
import { ComiteListComponent } from './tipo-comite/comite-list/comite-list.component';
import { RemoveComiteComponent } from './tipo-comite/remove-comite/remove-comite.component';
import { RemoveTipoSolicitudComponent } from './tipo-solicitud/remove-tipo-solicitud/remove-tipo-solicitud.component';
import { TipoSolicitudCreationComponent } from './tipo-solicitud/tipo-solicitud-creation/tipo-solicitud-creation.component';
import { TipoSolicitudEditionComponent } from './tipo-solicitud/tipo-solicitud-edition/tipo-solicitud-edition.component';
import { TipoSolicitudListComponent } from './tipo-solicitud/tipo-solicitud-list/tipo-solicitud-list.component';

const routes: Routes = [
  {
    path: 'solicitud-creation',
    component: SolicitudCreationComponent,
  },
  {
    path: 'solicitud-edition',
    component: SolicitudEditionComponent,
  },
  {
    path: 'solicitud-list',
    component: SolicitudListComponent,
  },
  {
    path: 'cancel-solicitud',
    component: CancelSolicitudComponent,
  },
  {
    path: 'modalidad-creation',
    component: ModalidadCreationComponent,
  },
  {
    path: 'modalidad-edition',
    component: ModalidadEditionComponent,
  },
  {
    path: 'modalidad-list',
    component: ModalidadListComponent,
  },
  {
    path: 'remove-modalidad',
    component: RemoveModalidadComponent,
  },
  {
    path: 'recordatorios-creation',
    component: RecordatoriosCreationComponent,
  },
  {
    path: 'recordatorios-edition',
    component: RecordatoriosEditionComponent,
  },
  {
    path: 'recordatorios-list',
    component: RecordatoriosListComponent,
  },
  {
    path: 'remove-recordatorios',
    component: RemoveRecordatoriosComponent,
  },
  {
    path: 'comite-creation',
    component: ComiteCreationComponent,
  },
  {
    path: 'comite-edition',
    component: ComiteEditionComponent,
  },
  {
    path: 'comite-list',
    component: ComiteListComponent,
  },
  {
    path: 'remove-comite',
    component: RemoveComiteComponent,
  },
  {
    path: 'tipo-solicitud-creation',
    component: TipoSolicitudCreationComponent,
  },
  {
    path: 'tipo-solicitud-edition',
    component: TipoSolicitudEditionComponent,
  },
  {
    path: 'tipo-solicitud-list',
    component: TipoSolicitudListComponent,
  },
  {
    path: 'remove-tipo-solicitud',
    component: RemoveTipoSolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudRoutingModule {}
