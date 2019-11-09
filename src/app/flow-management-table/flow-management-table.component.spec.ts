import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowManagementTableComponent } from './flow-management-table.component';

describe('FlowManagementTableComponent', () => {
  let component: FlowManagementTableComponent;
  let fixture: ComponentFixture<FlowManagementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowManagementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
