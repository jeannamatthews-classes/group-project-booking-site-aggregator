import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../../model/class/interface/Login'; 
import { HttpClient, HttpParams } from '@angular/common/http';

/**The login.component.ts file defines the LoginComponent, which is responsible
 *  for handling user login functionality in the Angular application. It includes
 *  methods to fetch customer details from the backend, manage login data, and display
 *  confirmation dialogs for specific actions. The component interacts with the backend
 *  API using Angular's HttpClient and provides a user interface for login-related
 *  operations. 
 */

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: Login = new Login();   // Initialized as an empty array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //this.getAllData();
  }

     login(): void {

     this.deleteConfirmation();
      // Fetch staff details as an array from the backend
      this.http.get<{ data: Login }>('http://127.0.0.1:8000/fetchCustomerdetails').subscribe({
        next: (res) => {
          // Assign the 'data' property to staffDetails
          this.loginData = res.data;
        },
        error: (err) => {
          console.error('Error fetching staff details:', err);
        }
      });
    }


    deleteConfirmation(): boolean {
      return confirm("Are you sure you want to delete this staff?");
    }
  
}
