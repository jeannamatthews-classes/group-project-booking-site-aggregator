import { Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';

/**
 * The app.routes.ts file defines the application's routing configuration. It specifies
 *  the routes for various components, such as StaffComponent, LoginComponent,
 *  ManagerComponent, CustomerComponent, and HomeComponent. It also includes a default
 *  route that redirects to the StaffComponent when no specific path is provided.
 *  This file enables navigation between different views in the Angular application.
 */
export const routes: Routes = [
{
    path: '',
    redirectTo: 'staffComponent',
    pathMatch: 'full'
},
{
    path:'staff',
    component:StaffComponent
    
},

{
    path:'login',
    component:LoginComponent
    
},
{
    path:'manager',
    component:ManagerComponent
    
},
{
    path:'customer',
    component:CustomerComponent
    
},
{
    path:'home',
    component:HomeComponent
    
},


];
