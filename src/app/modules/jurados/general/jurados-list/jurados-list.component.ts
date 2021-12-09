import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

@Component({
  selector: 'app-jurados-list',
  templateUrl: './jurados-list.component.html',
  styleUrls: ['./jurados-list.component.css'],
})
export class JuradosListComponent implements OnInit {
  recordList: JuradosModel[] = [];
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE;
  totalAmount: number = 0;
  constructor(private service: JuradosService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: JuradosModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }
}
