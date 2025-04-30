import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
/**The login.component.spec.ts file contains unit tests for the LoginComponent
 *  in an Angular application. It uses Angular's testing utilities to set up a
 *  test environment, create an instance of the component, and verify that the
 *  component is created successfully. The file includes a basic test case to ensure
 *  the component initializes without errors.
 */
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
