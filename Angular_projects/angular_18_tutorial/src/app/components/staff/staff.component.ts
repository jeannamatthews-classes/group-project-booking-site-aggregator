import { Component, OnInit } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IStaffDetails } from '../../model/class/interface/StaffDetails';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

/**
 * The StaffComponent is responsible for managing staff details in the Angular application.
 * It includes methods to fetch, update, and delete staff information from the backend API.
 * The component uses Angular's HttpClient to make HTTP requests and provides a user interface 
 * for staff management tasks. The component is designed to be standalone, allowing it to be used 
 * independently in different parts of the application. It also includes confirmation dialogs
 *  for delete and edit actions to enhance user experience.
 */
@Component({
  selector: 'app-staff',   
  standalone: true, // ✅ Added standalone mode
  imports: [FormsModule, CommonModule],
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffDetails: IStaffDetails[] = []; // ✅ Initialized as an empty array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllData();
  }

  editIndex: number | null = null;

  enableEdit(index: number): void {
    this.editIndex = index;
  }

  // Fetch staff details from the backend
  getAllData(): void {
    // Fetch staff details as an array from the backend
    this.http.get<{ data: IStaffDetails[] }>('http://127.0.0.1:8000/fetchstaffdetails').subscribe({
      next: (res) => {
        // Assign the 'data' property to staffDetails
        this.staffDetails = res.data;
      },
      error: (err) => {
        console.error('Error fetching staff details:', err);
      }
    });
  }

  
  updateStaffDetails(staff: IStaffDetails): void {
    const url = `http://127.0.0.1:8000/updatestaffdetails/${staff.ID}`;
    const params = new HttpParams()
      .set('Name', staff.Name)
      .set('Gender', staff.Gender)
      .set('Phone_number', staff.Phone_number.toString())
      .set('Email_Id', staff.Email_Id)
      .set('DOB', staff.DOB)
      .set('Shift', staff.Shift)
      .set('Attends', staff.Attends)
      .set('Manager', staff.Manager);
      
  
    this.http.put(url, {}, { params }).subscribe({
      next: () => {
        console.log('Staff details updated successfully.');
        this.getAllData(); // 👈 Refresh data from API
      this.editIndex = -1;
      },
      error: (err) => {
        console.error('Error updating staff details:', err);
      }
    });
  }
  
  

  // API Call: Update staff details
  getUpdate(object: IStaffDetails): Observable<IStaffDetails> {
    return this.http.put<IStaffDetails>(`${environment.API_URL}staff/${object.ID}`, object);
  }


  // ✅ Added API Call: Delete staff details
  deleteStaffDetails(id: number): void {
    this.deleteConfirmation();  
    this.http.delete(`http://127.0.0.1:8000/deletestaffdetails`, {
      params: { ID: id }
    }).subscribe({
      next: () => {
        this.staffDetails = this.staffDetails.filter(staff => staff.ID !== id);
        console.log('Staff deleted successfully.');
      },
      error: (err) => {
        console.error('Error updating staff details:', err);
      }
    });
  }

  deleteConfirmation(): boolean {
    return confirm("Are you sure you want to delete this staff?");
  }

  editConfirmation(): boolean {
    return confirm("Are you sure you want to edit this staff?");
  }
  


  }
