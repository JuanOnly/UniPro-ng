import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion.model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';
@Component({
  selector: 'app-evaluacion-list',
  templateUrl: './evaluacion-list.component.html',
  styleUrls: ['./evaluacion-list.component.css']
})
export class EvaluacionListComponent implements OnInit {
  recordList: EvaluacionModel[] = [];
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE;
  totalAmount: number = 0;
  constructor(private service: EvaluacionService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: EvaluacionModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }
}
