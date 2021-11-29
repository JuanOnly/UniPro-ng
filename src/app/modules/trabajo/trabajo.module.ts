import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajoRoutingModule } from './trabajo-routing.module';
import { TrabajoCreationComponent } from './general/trabajo-creation/trabajo-creation.component';
import { TrabajoEditionComponent } from './general/trabajo-edition/trabajo-edition.component';
import { TrabajoListComponent } from './general/trabajo-list/trabajo-list.component';
import { RemoveTrabajoComponent } from './general/remove-trabajo/remove-trabajo.component';
import { VinculacionCreationComponent } from './vinculacion/vinculacion-creation/vinculacion-creation.component';
import { VinculacionEditionComponent } from './vinculacion//vinculacion-edition/vinculacion-edition.component';
import { VinculacionListComponent } from './vinculacion//vinculacion-list/vinculacion-list.component';
import { RemoveVinculacionComponent } from './vinculacion/remove-vinculacion/remove-vinculacion.component';
import { DepartamentoCreationComponent } from './departamento/departamento-creation/departamento-creation.component';
import { DepartamentoEditionComponent } from './departamento/departamento-edition/departamento-edition.component';
import { DepartamentoListComponent } from './departamento/departamento-list/departamento-list.component';
import { RemoveDepartamentoComponent } from './departamento/remove-departamento/remove-departamento.component';
import { FacultadCreationComponent } from './facultad/facultad-creation/facultad-creation.component';
import { FacultadEditionComponent } from './facultad/facultad-edition/facultad-edition.component';
import { FacultadListComponent } from './facultad/facultad-list/facultad-list.component';
import { RemoveFacultadComponent } from './facultad/remove-facultad/remove-facultad.component';

@NgModule({
  declarations: [
    TrabajoCreationComponent,
    TrabajoEditionComponent,
    TrabajoListComponent,
    RemoveTrabajoComponent,
    VinculacionCreationComponent,
    VinculacionEditionComponent,
    VinculacionListComponent,
    RemoveVinculacionComponent,
    DepartamentoCreationComponent,
    DepartamentoEditionComponent,
    DepartamentoListComponent,
    RemoveDepartamentoComponent,
    FacultadCreationComponent,
    FacultadEditionComponent,
    FacultadListComponent,
    RemoveFacultadComponent,
  ],
  imports: [CommonModule, TrabajoRoutingModule],
})
export class TrabajoModule {}
