import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponent } from './staff.component';

/**
 * The staff.component.spec.ts file contains unit tests for the StaffComponent
 *  in an Angular application. It uses Angular's testing utilities to set up a
 *  test environment, create an instance of the component, and verify that the
 *  component is created successfully. The file includes a basic test case to
 *  ensure the component initializes without errors.
 */
describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
