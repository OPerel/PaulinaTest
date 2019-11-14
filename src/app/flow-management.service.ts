import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlowManagementService {

  flowsUri = `${env.API_URL}getuserflows`;

  constructor(private http: HttpClient) { }

  getUserFlows() {
    const accessToken = `Bearer ${JSON.parse(localStorage['okta-token-storage']).accessToken.accessToken}`;
    const sessionId = localStorage.sessionId;
    const headers = new HttpHeaders().append('authorization', accessToken);
    const params = new HttpParams().set('SessionId', localStorage.sessionId);
    console.log('send req to /getuserflows with accessToken header: ', accessToken, ';\nand sessionId param: ', sessionId);
    return this.http.get(this.flowsUri, {
      // withCredentials: true,
      params,
      headers
    });
  }
}

