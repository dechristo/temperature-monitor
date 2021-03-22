import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Location } from "../models/location";


@Injectable({
  providedIn: 'root',
})

export class LocationService {

  constructor(private httpClient: HttpClient) {

  }

  public getLocation(): Observable<Location[]> {
    const failures = this.httpClient.get<Location[]>("http://localhost:3010/locations");
    return failures;
  }
}

