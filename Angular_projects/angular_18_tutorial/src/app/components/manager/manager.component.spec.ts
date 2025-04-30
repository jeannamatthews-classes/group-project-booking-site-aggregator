import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';

/**The manager.component.spec.ts file contains unit tests for the ManagerComponent
 *  in an Angular application. It uses Angular's testing utilities to set up a
 *  test environment, create an instance of the component, and verify that the
 *  component is created successfully. The file includes a basic test case to ensure
 *  the component initializes without errors.
 */
describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
