import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurados-edition',
  templateUrl: './jurados-edition.component.html',
  styleUrls: ['./jurados-edition.component.css'],
})
export class JuradosEditionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
    this.SearchRecord();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo_electronico: ['', [Validators.required]],
      entidad: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradosModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['name'].setValue(data.nombre_completo);
        this.GetDF['telefono'].setValue(data.telefono);
        this.GetDF['correo_electronico'].setValue(data.correo_electronico);
        this.GetDF['entidad'].setValue(data.entidad);
      },
    });
  }

  SaveRecord() {
    let model = new JuradosModel();
    model.id = this.GetDF['id'].value;
    model.nombre_completo = this.GetDF['name'].value;
    model.telefono = parseInt(this.GetDF['telefono'].value);
    model.correo_electronico = this.GetDF['correo_electronico'].value;
    model.entidad = this.GetDF['entidad'].value;

    this.service.EditRecod(model).subscribe({
      next: (data: JuradosModel) => {
        alert(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(['/jurados/jurados-list']);
      },
    });
  }
}
