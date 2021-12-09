import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaCreationComponent } from './area-investigation/area-creation/area-creation.component';
import { AreaEditionComponent } from './area-investigation/area-edition/area-edition.component';
import { AreaListComponent } from './area-investigation/area-list/area-list.component';
import { RemoveAreaComponent } from './area-investigation/remove-area/remove-area.component';
import { JuradosCreationComponent } from './general/jurados-creation/jurados-creation.component';
import { JuradosEditionComponent } from './general/jurados-edition/jurados-edition.component';
import { JuradosListComponent } from './general/jurados-list/jurados-list.component';
import { RemoveJuradosComponent } from './general/remove-jurados/remove-jurados.component';

const routes: Routes = [
  {
    path: 'jurados-creation',
    component: JuradosCreationComponent,
  },
  {
    path: 'jurados-edition/:id',
    component: JuradosEditionComponent,
  },
  {
    path: 'jurados-list',
    component: JuradosListComponent,
  },
  {
    path: 'remove-jurados/:id',
    component: RemoveJuradosComponent,
  },
  {
    path: 'area-creation',
    component: AreaCreationComponent,
  },
  {
    path: 'area-edition/:id',
    component: AreaEditionComponent,
  },
  {
    path: 'area-list',
    component: AreaListComponent,
  },
  {
    path: 'remove-area/:id',
    component: RemoveAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuradosRoutingModule {}
