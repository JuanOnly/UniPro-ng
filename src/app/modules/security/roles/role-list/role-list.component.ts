import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RoleModel } from 'src/app/models/parameters/role.model';
import { RoleService } from 'src/app/services/parameters/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit {
  recordList: RoleModel[] = [];
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE;
  totalAmount: number = 0;

  constructor(private service: RoleService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: RoleModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }
}
