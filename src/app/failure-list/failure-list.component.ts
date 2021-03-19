import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Failure } from '../models/failure';
import { FailureService } from '../services/failureService';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'
@Component({
  selector: 'app-failure-list',
  templateUrl: './failure-list.component.html',
  styleUrls: ['./failure-list.component.css']
})

@Injectable()
export class FailureListComponent implements OnInit {

  public failures: Failure[] = [];
  public displayedColumns: string[] = ['name', 'value'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  resultsLength = 0;

  constructor(private failureService: FailureService) {}

  resetPaging(): void {
    if (this.paginator) this.paginator.pageIndex = 0;
  }
  ngOnInit(): void {
    this.getFailures()
  }

  getFailures() {
    this.failureService.getFailures()
      .subscribe((data: Failure[]) =>  {
        console.log("muito locoooooo!")
          this.failures = data
          this.resultsLength = this.failures.length;
      });
  }
}
