import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/class/interface/Customer';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent  {

  customerDetails: Customer[] = []; // ✅ Initialized as an empty array
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCustomerData();
    // Initialization logic here
  }



  getAllCustomerData(): void {
    // Fetch staff details as an array from the backend
    this.http.get<{ data: Customer[] }>('http://127.0.0.1:8000/fetchCustomerdetails').subscribe({
      next: (res) => {
        // Assign the 'data' property to staffDetails
        this.customerDetails = res.data;
      },
      error: (err) => {
        console.error('Error fetching staff details:', err);
      }
    });
  }


  
}
