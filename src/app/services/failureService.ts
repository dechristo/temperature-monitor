import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Failure } from "../models/failure";


@Injectable({
  providedIn: 'root',
})

export class FailureService {

  constructor(private httpClient: HttpClient) {

  }

  public getFailures(): Observable<Failure[]> {
    const failures = this.httpClient.get<Failure[]>("http://localhost:3010/failures");
    return failures;
  }
}

