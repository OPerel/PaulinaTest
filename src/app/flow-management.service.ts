import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlowManagementService {

  uri = 'assets/dbBackup/pDocuments.json';

  constructor(private http: HttpClient) { }

  getUserFlows() {
    return this.http.get(this.uri);
  }
}
