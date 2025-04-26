import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StaffComponent } from './components/staff/staff.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
