import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from '../environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlowManagementService {

  flowsUri = `${env.API_URL}getuserflows`;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserFlows() {
    return this.http.get(this.flowsUri, this.auth.prepareHttprequest());
  }
}

