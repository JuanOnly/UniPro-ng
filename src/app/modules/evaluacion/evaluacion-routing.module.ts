import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelEvaluacionComponent } from './general/cancel-evaluacion/cancel-evaluacion.component';
import { EvaluacionCreationComponent } from './general/evaluacion-creation/evaluacion-creation.component';
import { EvaluacionEditionComponent } from './general/evaluacion-edition/evaluacion-edition.component';
import { EvaluacionListComponent } from './general/evaluacion-list/evaluacion-list.component';
import { RemoveResultadoComponent } from './resultado/remove-resultado/remove-resultado.component';
import { ResultadoEditionComponent } from './resultado/resultado-edition/resultado-edition.component';
import { ResultadoListarComponent } from './resultado/resultado-listar/resultado-listar.component';
import { ResultadoUploadComponent } from './resultado/resultado-upload/resultado-upload.component';

const routes: Routes = [
  {
    path: 'evaluacion-creation',
    component: EvaluacionCreationComponent,
  },
  {
    path: 'evaluacion-edition',
    component: EvaluacionEditionComponent,
  },
  {
    path: 'evaluacion-list',
    component: EvaluacionListComponent,
  },
  {
    path: 'cancel-evaluacion',
    component: CancelEvaluacionComponent,
  },
  {
    path: 'upload-resultado',
    component: ResultadoUploadComponent,
  },
  {
    path: 'resultado-edition',
    component: ResultadoEditionComponent,
  },
  {
    path: 'resultado-list',
    component: ResultadoListarComponent,
  },
  {
    path: 'remove-resultado',
    component: RemoveResultadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluacionRoutingModule {}
