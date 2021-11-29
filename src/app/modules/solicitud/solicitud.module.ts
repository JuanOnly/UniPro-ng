import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudCreationComponent } from './general/solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './general/solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './general/solicitud-list/solicitud-list.component';
import { CancelSolicitudComponent } from './general/cancel-solicitud/cancel-solicitud.component';
import { ModalidadCreationComponent } from './modalidad/modalidad-creation/modalidad-creation.component';
import { ModalidadEditionComponent } from './modalidad/modalidad-edition/modalidad-edition.component';
import { ModalidadListComponent } from './modalidad/modalidad-list/modalidad-list.component';
import { RemoveModalidadComponent } from './modalidad/remove-modalidad/remove-modalidad.component';
import { TipoSolicitudCreationComponent } from './tipo-solicitud/tipo-solicitud-creation/tipo-solicitud-creation.component';
import { TipoSolicitudEditionComponent } from './tipo-solicitud/tipo-solicitud-edition/tipo-solicitud-edition.component';
import { TipoSolicitudListComponent } from './tipo-solicitud/tipo-solicitud-list/tipo-solicitud-list.component';
import { RemoveTipoSolicitudComponent } from './tipo-solicitud/remove-tipo-solicitud/remove-tipo-solicitud.component';
import { RecordatoriosCreationComponent } from './recordatorios/recordatorios-creation/recordatorios-creation.component';
import { RecordatoriosEditionComponent } from './recordatorios/recordatorios-edition/recordatorios-edition.component';
import { RecordatoriosListComponent } from './recordatorios/recordatorios-list/recordatorios-list.component';
import { RemoveRecordatoriosComponent } from './recordatorios/remove-recordatorios/remove-recordatorios.component';
import { ComiteCreationComponent } from './tipo-comite/comite-creation/comite-creation.component';
import { ComiteEditionComponent } from './tipo-comite/comite-edition/comite-edition.component';
import { ComiteListComponent } from './tipo-comite/comite-list/comite-list.component';
import { RemoveComiteComponent } from './tipo-comite/remove-comite/remove-comite.component';


@NgModule({
  declarations: [
    SolicitudCreationComponent,
    SolicitudEditionComponent,
    SolicitudListComponent,
    CancelSolicitudComponent,
    ModalidadCreationComponent,
    ModalidadEditionComponent,
    ModalidadListComponent,
    RemoveModalidadComponent,
    TipoSolicitudCreationComponent,
    TipoSolicitudEditionComponent,
    TipoSolicitudListComponent,
    RemoveTipoSolicitudComponent,
    RecordatoriosCreationComponent,
    RecordatoriosEditionComponent,
    RecordatoriosListComponent,
    RemoveRecordatoriosComponent,
    ComiteCreationComponent,
    ComiteEditionComponent,
    ComiteListComponent,
    RemoveComiteComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
