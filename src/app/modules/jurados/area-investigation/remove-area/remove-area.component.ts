import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area.model';
import { AreaService } from 'src/app/services/parameters/area.service';

@Component({
  selector: 'app-remove-area',
  templateUrl: './remove-area.component.html',
  styleUrls: ['./remove-area.component.css'],
})
export class RemoveAreaComponent implements OnInit {
  id: number = 0;
  nombre: string = '';

  constructor(
    private router: Router,
    private service: AreaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: AreaModel) => {
        if (data.id && data.nombre) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        alert(ConfigurationData.REMOVE_MESSAGE);
        this.router.navigate(['/jurados/area-list']);
      },
    });
  }
}
