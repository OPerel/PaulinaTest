import { TestBed } from '@angular/core/testing';

import { FlowManagementService } from './flow-management.service';

describe('FlowManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowManagementService = TestBed.get(FlowManagementService);
    expect(service).toBeTruthy();
  });
});
