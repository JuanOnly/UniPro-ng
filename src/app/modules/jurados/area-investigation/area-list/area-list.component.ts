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

  constructor(private service: AreaService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList() {
    this.service.GetRecodList().subscribe({
      next: (data: AreaModel[]) => {
        this.recordList = data;
      },
    });
  }
}
