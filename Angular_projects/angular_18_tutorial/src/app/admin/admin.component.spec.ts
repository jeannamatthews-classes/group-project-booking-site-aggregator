import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

/*The admin.component.spec.ts file contains unit tests for the AdminComponent in an
Angular application. It uses Angular's testing utilities to set up a test environment,
create an instance of the component, and verify that the component is created
successfully. The file includes a basic test case to ensure the component initializes
without errors.

*/
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
