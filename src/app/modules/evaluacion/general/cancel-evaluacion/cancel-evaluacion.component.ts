import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion.model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';

@Component({
  selector: 'app-cancel-evaluacion',
  templateUrl: './cancel-evaluacion.component.html',
  styleUrls: ['./cancel-evaluacion.component.css']
})
export class CancelEvaluacionComponent implements OnInit {
  id: number = 0;
  id_solicitud:number=0;
  id_jurado: number=0;
  fecha_invitacion?: string='' ;
  fecha_respuesta?: string='' ;
respuesta?: string = '';
  observaciones?: string = '';

  constructor(
    private router: Router,
    private service: EvaluacionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: EvaluacionModel) => {
        if (
          data.id &&
          data.id_solicitud &&
          data.id_jurado &&
          data.fecha_invitacion &&
          data.fecha_respuesta &&
          data.respuesta &&
          data.observaciones
        ) {
          this.id = data.id;
          this.id_solicitud = data.id_solicitud;
          this.id_jurado = data.id_jurado;
          this.fecha_invitacion = data.fecha_invitacion;
          this.fecha_respuesta = data.fecha_respuesta;
          this.respuesta = data.respuesta;
          this.observaciones = data.observaciones;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        alert(ConfigurationData.REMOVE_MESSAGE);
        this.router.navigate(['/evaluacion/evaluacion-list']);
      },
    });
  }
}

