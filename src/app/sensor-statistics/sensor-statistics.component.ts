import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Failure } from '../models/failure';
import { SensorInfo, SensorStatistics } from '../models/sensorStastics';
import { FailureService } from '../services/failureService';

@Component({
  selector: 'app-sensor-statistics',
  templateUrl: './sensor-statistics.component.html',
  styleUrls: ['./sensor-statistics.component.css']
})

export class SensorStatisticsComponent implements OnInit {

public sensorFailures: SensorInfo = {};
public sensorAverageHighTemperature: SensorInfo = {};
public sensorStatistics: SensorStatistics[] = [];


public displayedColumns: string[] = ['sensorName', 'totalFailures', 'errorAvg'];

@ViewChild(MatPaginator) paginator: MatPaginator | undefined;
@ViewChild(MatSort) sort: MatSort | undefined;

resultsLength = 0;

constructor(private failureService: FailureService) {}

  ngOnInit(): void {
    this.buildSensorStatistics();
    // setInterval(() => {
    //   this.buildSensorStatistics()
    // },5000);
  }

  resetPaging(): void {
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  public buildSensorStatistics() {
    this.failureService.getFailures()
    .subscribe((data: Failure[]) =>  {
      console.log(`${data.length} failures received for statistics service.`)
      this.clear();
      data.forEach((failure) => {
        this.calculateTotalFailures(failure);
        this.calculareErrorTemperatureAverage(failure);
        this.resultsLength = Object.keys(this.sensorFailures).length;
      });
      this.buildStatistics();
    })
  }

  private clear() {
    this.sensorAverageHighTemperature = {};
    this.sensorFailures = {};
    this.sensorStatistics = [];
  }

  private calculateTotalFailures(failure: Failure): void {
    if (failure.name in this.sensorFailures) {
      this.sensorFailures[failure.name] += 1;
    } else {
      this.sensorFailures[failure.name] = 1;
    }
  }

  private calculareErrorTemperatureAverage(failure: Failure): void {
    if (!this.sensorAverageHighTemperature[failure.name]) {
      this.sensorAverageHighTemperature[failure.name] = failure.value;
    } else {
      this.sensorAverageHighTemperature[failure.name] = this.sensorAverageHighTemperature[failure.name] + failure.value
    }
  }

  private buildStatistics(): void {
    for (const itemKey in this.sensorFailures) {
      this.sensorStatistics.push({
        sensorName: itemKey,
        totalFailures: this.sensorFailures[itemKey],
        errorAvg: this.sensorAverageHighTemperature[itemKey] / this.sensorFailures[itemKey]
      });
    }
  }
}
