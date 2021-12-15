import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UsersModel } from 'src/app/models/parameters/users.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      nombre: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new UsersModel();
    model.nombre = this.GetDF['nombre'].value;
    model.celular = this.GetDF['celular'].value;
    model.correo = this.GetDF['correo'].value;
    model.clave = this.GetDF['clave'].value;

    this.service.SaveRecord(model).subscribe({
      next: (data: UsersModel) => {
        alert(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/security/user-list']);
      },
    });
  }
}
