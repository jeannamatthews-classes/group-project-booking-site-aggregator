import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';

/**
 * The customer.component.spec.ts file contains unit tests for the CustomerComponent
 *  in an Angular application. It uses Angular's testing utilities to set up a test
 *  environment, create an instance of the component, and verify that the component
 *  is created successfully. The file includes a basic test case to ensure the component
 *  initializes without errors.
 */

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
