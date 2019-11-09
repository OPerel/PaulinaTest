import { Component, OnInit } from '@angular/core';
import { FlowManagementService  } from '../flow-management.service';

@Component({
  selector: 'app-flow-management',
  templateUrl: './flow-management.component.html',
  styleUrls: ['./flow-management.component.css']
})
export class FlowManagementComponent implements OnInit {
  userFlows;
  userEmail;

  constructor(private fls: FlowManagementService) { }

  showFlows() {
    this.fls.getUserFlows().subscribe(res => {
      console.log('Got all users flows: ', res);
      this.userFlows = res;
      this.userEmail = this.userFlows.UserData.UserEmail;
    });
  }

  async ngOnInit() {
    this.showFlows();
  }

}
