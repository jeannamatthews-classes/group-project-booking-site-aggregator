import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**
 * The app.component.spec.ts file contains unit tests for the AppComponent
 *  in an Angular application. It uses Angular's testing utilities to set up
 *  a test environment, create an instance of the component, and verify its functionality.
 *  The file includes test cases to ensure the component initializes successfully,
 *  has the correct title, and renders the title in the template.
 */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_18_tutorial' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_18_tutorial');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_18_tutorial');
  });
});
