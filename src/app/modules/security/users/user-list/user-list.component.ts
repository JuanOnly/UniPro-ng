import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UsersModel } from 'src/app/models/parameters/users.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  recordList: UsersModel[] = [];
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE;
  totalAmount: number = 0;
  constructor(private service: UsuariosService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: UsersModel[]) => {
        console.log(data);

        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }
}
