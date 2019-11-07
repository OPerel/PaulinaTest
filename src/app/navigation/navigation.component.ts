import { Component, OnInit } from '@angular/core';
import { FlowManagementService  } from '../flow-management.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userEmail;

  constructor(private fls: FlowManagementService) { }

  showUserEmail() {
    this.fls.getUserFlows().subscribe(res => this.userEmail = res[0]._metadata.creator);
  }

  ngOnInit() {
    this.showUserEmail();
  }

}
