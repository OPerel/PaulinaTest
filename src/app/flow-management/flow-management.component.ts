import { Component, OnInit } from '@angular/core';
import { FlowManagementService  } from '../flow-management.service';

@Component({
  selector: 'app-flow-management',
  templateUrl: './flow-management.component.html',
  styleUrls: ['./flow-management.component.css']
})
export class FlowManagementComponent implements OnInit {
  users;

  constructor(private fls: FlowManagementService) { }

  showUsers() {
    this.fls.getUserFlows().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  ngOnInit() {
    this.showUsers();
  }

}
