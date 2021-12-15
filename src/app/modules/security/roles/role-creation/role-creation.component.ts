import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RoleModel } from 'src/app/models/parameters/role.model';
import { RoleService } from 'src/app/services/parameters/role.service';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.css'],
})
export class RoleCreationComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RoleService
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
    let model = new RoleModel();
    model.nombre = this.GetDF['nombre'].value;

    this.service.SaveRecod(model).subscribe({
      next: (data: RoleModel) => {
        alert(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/security/role-list']);
      },
    });
  }
}
