import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

@Component({
  selector: 'app-remove-jurados',
  templateUrl: './remove-jurados.component.html',
  styleUrls: ['./remove-jurados.component.css'],
})
export class RemoveJuradosComponent implements OnInit {
  id: number = 0;
  nombre_completo: string = '';
  telefono: number = 0;
  correo_electronico: string = '';
  entidad: string = '';

  constructor(
    private router: Router,
    private service: JuradosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradosModel) => {
        if (
          data.id &&
          data.nombre_completo &&
          data.telefono &&
          data.correo_electronico &&
          data.entidad
        ) {
          this.id = data.id;
          this.nombre_completo = data.nombre_completo;
          this.telefono = data.telefono;
          this.correo_electronico = data.correo_electronico;
          this.entidad = data.entidad;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        alert(ConfigurationData.REMOVE_MESSAGE);
        this.router.navigate(['/jurados/jurados-list']);
      },
    });
  }
}
