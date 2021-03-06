import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FailureListComponent } from './failure-list/failure-list.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { LocationListComponent } from './location-list/location-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SensorStatisticsComponent } from './sensor-statistics/sensor-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    FailureListComponent,
    SystemStatusComponent,
    LocationListComponent,
    SensorStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
