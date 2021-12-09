import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area.model';
import { AreaService } from 'src/app/services/parameters/area.service';

declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-area-creation',
  templateUrl: './area-creation.component.html',
  styleUrls: ['./area-creation.component.css'],
})
export class AreaCreationComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaService
  ) {}

  ngOnInit(): void {
    this.Formbuilding();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new AreaModel();
    model.nombre = this.GetDF['nombre'].value;

    this.service.SaveRecod(model).subscribe({
      next: (data: AreaModel) => {
        alert(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/jurados/area-list']);
      },
    });
  }
}
