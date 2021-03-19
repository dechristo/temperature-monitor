import { Component, Injectable, OnInit } from '@angular/core';
import { Failure } from '../models/failure';
import { FailureService } from '../services/failureService';

@Component({
  selector: 'app-failure-list',
  templateUrl: './failure-list.component.html',
  styleUrls: ['./failure-list.component.css']
})

@Injectable()
export class FailureListComponent implements OnInit {

  public failures: Failure[] = [];

  constructor(private failureService: FailureService) {}

  ngOnInit(): void {
    this.getFailures()
  }

  getFailures() {
    this.failureService.getFailures()
      .subscribe((data: Failure[]) =>  {
        console.log("muito locoooooo!")
          this.failures = data
      });
  }
}
