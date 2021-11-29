import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { EvaluacionCreationComponent } from './general/evaluacion-creation/evaluacion-creation.component';
import { EvaluacionEditionComponent } from './general/evaluacion-edition/evaluacion-edition.component';
import { EvaluacionListComponent } from './general/evaluacion-list/evaluacion-list.component';
import { CancelEvaluacionComponent } from './general/cancel-evaluacion/cancel-evaluacion.component';
import { ResultadoUploadComponent } from './resultado/resultado-upload/resultado-upload.component';
import { ResultadoEditionComponent } from './resultado/resultado-edition/resultado-edition.component';
import { ResultadoListarComponent } from './resultado/resultado-listar/resultado-listar.component';
import { RemoveResultadoComponent } from './resultado/remove-resultado/remove-resultado.component';


@NgModule({
  declarations: [
    EvaluacionCreationComponent,
    EvaluacionEditionComponent,
    EvaluacionListComponent,
    CancelEvaluacionComponent,
    ResultadoUploadComponent,
    ResultadoEditionComponent,
    ResultadoListarComponent,
    RemoveResultadoComponent
  ],
  imports: [
    CommonModule,
    EvaluacionRoutingModule
  ]
})
export class EvaluacionModule { }
