import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StaffComponent } from './components/staff/staff.component';
import { RouterModule } from '@angular/router';

/**
 * The app.component.ts file defines the AppComponent, which serves as the root component
 *  of the Angular application. It acts as the entry point for the application and includes
 *  the main layout and routing logic. The component imports Angular's RouterOutlet and
 *  RouterLink to enable navigation between different views and components, such as the
 *  LoginComponent and StaffComponent. It also defines a title property for the application.
 */

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
