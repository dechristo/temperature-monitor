import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FailureListComponent } from './failure-list/failure-list.component';
import { FailureDisplayComponent } from './failure-display/failure-display.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { LocationListComponent } from './location-list/location-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FailureListComponent,
    FailureDisplayComponent,
    SystemStatusComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
