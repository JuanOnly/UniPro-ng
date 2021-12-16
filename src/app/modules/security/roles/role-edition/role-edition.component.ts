import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RoleModel } from 'src/app/models/parameters/role.model';
import { RoleService } from 'src/app/services/parameters/role.service';

@Component({
  selector: 'app-role-edition',
  templateUrl: './role-edition.component.html',
  styleUrls: ['./role-edition.component.css'],
})
export class RoleEditionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RoleService,
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
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let _id = this.route.snapshot.params['_id'];
    this.service.SearchRecord(_id).subscribe({
      next: (data: RoleModel) => {
        this.GetDF['_id'].setValue(data._id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }

  SaveRecord() {
    let model = new RoleModel();
    model._id = this.GetDF['_id'].value;
    model.nombre = this.GetDF['nombre'].value;

    this.service.EditRecord(model).subscribe({
      next: (data: RoleModel) => {
        alert(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(['/security/role-list']);
      },
    });
  }
}
