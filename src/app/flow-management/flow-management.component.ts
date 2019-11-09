import { Component, OnInit } from '@angular/core';
import { FlowManagementService  } from '../flow-management.service';

@Component({
  selector: 'app-flow-management',
  templateUrl: './flow-management.component.html',
  styleUrls: ['./flow-management.component.css']
})
export class FlowManagementComponent implements OnInit {
  userFlows;
  userEmail: string;
  documents: [];
  pDocuments: [];
  progressFlows: [];
  outSourceJobs: [];

  // pDocuments = this.userFlows.pDocuments;

  constructor(private fls: FlowManagementService) { }

  showFlows() {
    this.fls.getUserFlows().subscribe(res => {
      console.log('Got all user flows: ', res);
      this.userFlows = res;
      this.userEmail = this.userFlows.UserData.UserEmail;
      this.documents = this.userFlows.publishedDocumentsList;
      this.pDocuments = this.userFlows.pDocumentsList;
      this.progressFlows = this.userFlows.InProgressFlows;
      this.outSourceJobs = this.userFlows.OutsourceJobs;
    });
  }

  ngOnInit() {
    this.showFlows();
  }

}
