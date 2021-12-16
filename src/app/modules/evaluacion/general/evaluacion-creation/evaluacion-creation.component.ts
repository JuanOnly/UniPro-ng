import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion.model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-evaluacion-creation',
  templateUrl: './evaluacion-creation.component.html',
  styleUrls: ['./evaluacion-creation.component.css']
})
export class EvaluacionCreationComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor( private fb: FormBuilder,
    private router: Router,
    private service: EvaluacionService
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
  }
  
  Formbuilding() {
    this.dataForm = this.fb.group({
      id_solicitud: ['', [Validators.required]],
      id_jurado: ['', [Validators.required]],
      fecha_invitacion: ['', [Validators.required]],
      fecha_respuesta: ['', [Validators.required]],
      respuesta: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new EvaluacionModel();
    model.id_solicitud = parseInt(this.GetDF['id_solicitud'].value);
    model.id_jurado = parseInt(this.GetDF['id_jurado'].value);
    model.fecha_invitacion = this.GetDF['fecha_invitacion'].value;
    model.fecha_respuesta = (this.GetDF['fecha_respuesta'].value);
    model.respuesta = this.GetDF['respuesta'].value;
    model.observaciones = this.GetDF['observaciones'].value;

    this.service.SaveRecod(model).subscribe({
      next: (data: EvaluacionModel) => {
        alert(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/evaluacion/evaluacion-list']);
      },
    });
  }
}
