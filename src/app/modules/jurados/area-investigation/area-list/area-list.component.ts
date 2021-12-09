import { Component, OnInit } from '@angular/core';
import { AreaModel } from 'src/app/models/parameters/area.model';
import { AreaService } from 'src/app/services/parameters/area.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css'],
})
export class AreaListComponent implements OnInit {
  recordList: AreaModel[] = [];
  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(private service: AreaService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: AreaModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }
}
