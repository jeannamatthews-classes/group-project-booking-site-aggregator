import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/class/interface/Customer';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  editIndex: number | null = null;
  enableEdit(index: number): void {
    this.editIndex = index;
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

  deletecustomerDetails(id: number): void {
    this.deleteConfirmation();  
    this.http.delete(`http://127.0.0.1:8000/deletecustomerdetails`, {
      params: { CustomerID: id }
    }).subscribe({
      next: () => {
        this.customerDetails = this.customerDetails.filter(customer => customer.CustomerID !== id);
        console.log('Staff deleted successfully.');
      },
      error: (err) => {
        console.error('Error updating staff details:', err);
      }
    });
  }

  deleteConfirmation(): boolean {
    return confirm("Are you sure you want to delete this customer?");
  }


  updateCustomerDetails(customer: Customer): void {
      const url = `http://127.0.0.1:8000/updatesCustomerdetails/${customer.CustomerID}`;
      const params = new HttpParams()
        .set('CustomerID', customer.CustomerID)
        .set('Name', customer.Name)
        .set('Reservations', customer.Reservations)
        .set('Email_Id', customer.Email_Id)
        .set('Phone_num', customer.Phone_num)
        .set('Preferences', customer.Preferences)
        .set('Payment_history', customer.Payment_history)
        .set('Check_In_Date', customer.Check_In_Date)
        .set('Check_Out_Date', customer.Check_Out_Date)
        .set('Loyalty_programs', customer.Loyalty_programs)
        .set('Inventory', customer.Inventory)
        .set('Inventory_price', customer.Inventory_price.toString()); // Convert to string if necessary
        
    
      this.http.put(url, {}, { params }).subscribe({
        next: () => {
          console.log('Customer details updated successfully.');
          this.getAllCustomerData(); // 👈 Refresh data from API
        this.editIndex = -1;
        },
        error: (err) => {
          console.error('Error updating Customer details:', err);
        }
      });
    }
    

  
}
