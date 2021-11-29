import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuradosRoutingModule } from './jurados-routing.module';
import { JuradosCreationComponent } from './general/jurados-creation/jurados-creation.component';
import { JuradosEditionComponent } from './general/jurados-edition/jurados-edition.component';
import { JuradosListComponent } from './general/jurados-list/jurados-list.component';
import { RemoveJuradosComponent } from './general/remove-jurados/remove-jurados.component';
import { AreaCreationComponent } from './area-investigation/area-creation/area-creation.component';
import { AreaEditionComponent } from './area-investigation/area-edition/area-edition.component';
import { AreaListComponent } from './area-investigation/area-list/area-list.component';
import { RemoveAreaComponent } from './area-investigation/remove-area/remove-area.component';


@NgModule({
  declarations: [
    JuradosCreationComponent,
    JuradosEditionComponent,
    JuradosListComponent,
    RemoveJuradosComponent,
    AreaCreationComponent,
    AreaEditionComponent,
    AreaListComponent,
    RemoveAreaComponent
  ],
  imports: [
    CommonModule,
    JuradosRoutingModule
  ]
})
export class JuradosModule { }
