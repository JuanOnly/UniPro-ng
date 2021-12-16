import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RoleModel } from 'src/app/models/parameters/role.model';
import { RoleService } from 'src/app/services/parameters/role.service';

@Component({
  selector: 'app-remove-role',
  templateUrl: './remove-role.component.html',
  styleUrls: ['./remove-role.component.css'],
})
export class RemoveRoleComponent implements OnInit {
  id: number = 0;
  nombre: string = '';

  constructor(
    private router: Router,
    private service: RoleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['_id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: RoleModel) => {
        if (data._id && data.nombre) {
          this.id = data._id;
          this.nombre = data.nombre;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        alert(ConfigurationData.REMOVE_MESSAGE);
        this.router.navigate(['/security/role-list']);
      },
    });
  }
}
