import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UsersModel } from 'src/app/models/parameters/users.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css'],
})
export class UserEditionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
    this.SearchRecord();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      _id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params['_id'];
    console.log(id);

    this.service.SearchRecord(id).subscribe({
      next: (data: UsersModel) => {
        this.GetDF['_id'].setValue(data._id);
        this.GetDF['nombre'].setValue(data.nombre);
        this.GetDF['celular'].setValue(data.celular);
        this.GetDF['correo'].setValue(data.correo);
        this.GetDF['clave'].setValue(data.clave);
      },
    });
  }

  SaveRecord() {
    let model = new UsersModel();
    model._id = this.GetDF['_id'].value;
    model.nombre = this.GetDF['nombre'].value;
    model.celular = this.GetDF['celular'].value;
    model.correo = this.GetDF['correo'].value;
    model.clave = this.GetDF['clave'].value;

    this.service.EditRecord(model).subscribe({
      next: (data: UsersModel) => {
        alert(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(['/security/user-list']);
      },
    });
  }
}
