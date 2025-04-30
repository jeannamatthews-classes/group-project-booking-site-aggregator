import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from '../model/class/interface/Customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * The home.component.ts file defines the HomeComponent, which is part of the Angular
 *  application. This component is responsible for managing customer bookings and
 *  inventory-related operations. It includes methods to open a booking form,
 *  submit bookings, update inventory prices, and reset the form. The component
 *  interacts with a backend API using Angular's HttpClient to update customer
 *  details and provides a user interface for managing bookings.
 */
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Fixed typo
})
export class HomeComponent {

  customerDetails: Customer[] = []; // ✅ Initialized as an empty array
  constructor(private http: HttpClient) {}

   showForm = false;
  selectedListing: string = '';
  

  customer = {
    CustomerID: 0,
    Reservations: '',
    Name: '',
    Email_Id: '',
    Phone_num: 0,
    Preferences: '',
    Payment_history: '',
    Check_In_Date: '',
    Check_Out_Date: '',
    Loyalty_programs: '',
    Inventory: '',
    Inventory_price: 0


  };
  


  openForm(listing: string) {
    this.selectedListing = listing;
    this.showForm = true;
    this.customer.Preferences = listing;
  }

  submitBooking() {
    console.log('Booking Submitted:', this.customer);
    alert(`Booking submitted for ${this.selectedListing}!`);
    this.resetForm();
  }

  updateInventoryPrice() {
    if (this.customer.Inventory === 'Boat') {
      this.customer.Inventory_price = 100; 
    } else if (this.customer.Inventory === 'Tent') {
      this.customer.Inventory_price = 50; 
    } else {
      this.customer.Inventory_price = 0;
    }
  }

  resetForm() {
    this.showForm = false;
    this.customer = {
      CustomerID: 0,
      Reservations: '',
      Name: '',
      Email_Id: '',
      Phone_num: 0,
      Preferences: '',
      Payment_history: '',
      Check_In_Date: '',
      Check_Out_Date: '',
      Loyalty_programs: '',
      Inventory: '',
      Inventory_price: 0
    
    };
  }


  updateBooking(customer: Customer): void {
        const url = `http://127.0.0.1:8000/addcustomerdetails`;
        const params = new HttpParams()
          .set('Name', customer.Name)
          .set('Reservations', customer.Reservations)
          .set('Email_Id', customer.Email_Id)
          .set('Phone_num', customer.Phone_num)
          .set('Preferences', customer.Preferences)
          .set('Payment_history', "0")
          .set('Check_In_Date', customer.Check_In_Date)
          .set('Check_Out_Date', customer.Check_Out_Date)
          .set('Loyalty_programs', customer.Loyalty_programs)
          .set('Inventory', customer.Inventory)
          .set('Inventory_price', customer.Inventory_price.toString()); // Convert to string if necessary
          
      
        this.http.post(url, {}, { params }).subscribe({
          next: () => {
            console.log('Customer details updated successfully.');
           
          },
          error: (err: any) => {
            console.error('Error updating Customer details:', err);
          }
        });
      }

}
