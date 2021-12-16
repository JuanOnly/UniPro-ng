import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion.model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-evaluacion-edition',
  templateUrl: './evaluacion-edition.component.html',
  styleUrls: ['./evaluacion-edition.component.css']
})
export class EvaluacionEditionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EvaluacionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
    this.SearchRecord();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      fecha_invitacion: ['', [Validators.required]],
      fecha_respuesta: ['', [Validators.required]],
      respuesta: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: EvaluacionModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['id_solicitud'].setValue(data.id_solicitud);
        this.GetDF['id_jurado'].setValue(data.id_jurado);
        this.GetDF['fecha_invitacion'].setValue(data.fecha_invitacion);
        this.GetDF['fecha_respuesta'].setValue(data.fecha_respuesta);
        this.GetDF['respuesta'].setValue(data.respuesta);
        this.GetDF['observaciones'].setValue(data.observaciones);
      },
    });
  }

  SaveRecord() {
    let model = new EvaluacionModel();
    model.id = this.GetDF['id'].value;
    model.id_solicitud = this.GetDF['id_solicitud'].value;
    model.id_jurado = this.GetDF['id_jurado'].value;
    model.fecha_invitacion = this.GetDF['fecha_invitacion'].value;
    model.fecha_respuesta = (this.GetDF['fecha_respuesta'].value);
    model.respuesta = this.GetDF['respuesta'].value;
    model.observaciones = this.GetDF['observaciones'].value;

    this.service.EditRecod(model).subscribe({
      next: (data: EvaluacionModel) => {
        alert(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(['/evaluacion/evaluacion-list']);
      },
    });
  }
}
