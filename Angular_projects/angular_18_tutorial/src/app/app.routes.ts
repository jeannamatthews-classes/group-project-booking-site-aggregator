import { Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';

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
