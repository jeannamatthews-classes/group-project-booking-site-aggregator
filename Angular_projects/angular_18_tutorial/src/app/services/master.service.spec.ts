import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

/**
 * The master.service.spec.ts file contains unit
 *  tests for the MasterService in an Angular application.
 *  It uses Angular's testing utilities to set up a test environmen
 * t and verify that the service is created successfully. The file includes
 *  a basic test case to ensure the service initializes without errors.
 */
describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
