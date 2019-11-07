import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowManagementComponent } from './flow-management.component';

describe('FlowManagementComponent', () => {
  let component: FlowManagementComponent;
  let fixture: ComponentFixture<FlowManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
