import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UsersModel } from 'src/app/models/parameters/users.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
export class RemoveUserComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  celular: string = '';
  correo: string = '';
  clave: string = '';

  constructor(
    private router: Router,
    private service: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['_id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: UsersModel) => {
        if (
          data._id &&
          data.nombre &&
          data.celular &&
          data.correo &&
          data.clave
        ) {
          this.id = data._id;
          this.nombre = data.nombre;
          this.celular = data.celular;
          this.correo = data.correo;
          this.clave = data.clave;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        alert(ConfigurationData.REMOVE_MESSAGE);
        this.router.navigate(['/security/user-list']);
      },
    });
  }
}
