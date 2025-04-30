import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

/**
 * The home.component.spec.ts file contains unit tests for the HomeComponent
 *  in an Angular application. It uses Angular's testing utilities to set up
 *  a test environment, create an instance of the component, and verify that
 *  the component is created successfully. The file includes a basic test case
 *  to ensure the component initializes without errors.
 */
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
