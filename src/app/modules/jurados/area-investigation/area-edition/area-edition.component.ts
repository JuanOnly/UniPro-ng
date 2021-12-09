import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area.model';
import { AreaService } from 'src/app/services/parameters/area.service';

@Component({
  selector: 'app-area-edition',
  templateUrl: './area-edition.component.html',
  styleUrls: ['./area-edition.component.css'],
})
export class AreaEditionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
    this.SearchRecord();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: AreaModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }

  SaveRecord() {
    let model = new AreaModel();
    model.id = this.GetDF['id'].value;
    model.nombre = this.GetDF['nombre'].value;

    this.service.EditRecord(model).subscribe({
      next: (data: AreaModel) => {
        alert(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(['/jurados/area-list']);
      },
    });
  }
}
