import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-management-table',
  templateUrl: './flow-management-table.component.html',
  styleUrls: ['./flow-management-table.component.css']
})
export class FlowManagementTableComponent implements OnInit {
  @Input() name: string;
  @Input() documentData: [];

  constructor() { }

  ngOnInit() {
  }

}
