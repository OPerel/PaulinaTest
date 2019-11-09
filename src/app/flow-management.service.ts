import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlowManagementService {

  flowsUri = 'http://localhost:8000/api/getuserflows';

  constructor(private http: HttpClient) { }

  getUserFlows() {
    const accessToken = `Bearer ${JSON.parse(localStorage['okta-token-storage']).accessToken.accessToken}`;
    const sessionId = localStorage.sessionId;
    const headers = new HttpHeaders().append('authorization', accessToken);
    const params = new HttpParams().set('SessionId', localStorage.sessionId)
    console.log('send req to /getuserflows with accessToken header: ', accessToken, ' and sessionId param: ', sessionId);
    return this.http.get(this.flowsUri, {
      // withCredentials: true,
      params,
      headers
    });
  }
}

