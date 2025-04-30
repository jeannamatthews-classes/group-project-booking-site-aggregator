import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStaffDetails } from '../model/class/interface/StaffDetails';

/**
 * The master.service.ts file defines the MasterService, which is an Angular service
 *  responsible for managing staff-related data and operations. It includes methods
 *  to fetch, update, and delete staff details by interacting with a backend API using
 *  Angular's HttpClient. The service provides observable-based methods for API
 *  interactions and maintains a local array of staff details for use within the
 *  application.
 */
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  staffDetails: IStaffDetails[] = [];

getStaffDetails1():Observable<IStaffDetails>{
  return this.http.get<IStaffDetails>('http://127.0.0.1:8000/fetchstaffdetails');
}

getStaffDetails(): void {
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




updateStaffDetails(obj:IStaffDetails):Observable<IStaffDetails>{
  return this.http.put<IStaffDetails>('http://127.0.0.1:8000/updatestaffdetails',obj);
 
}

deleteStaffDetails(obj:IStaffDetails):Observable<IStaffDetails>{
  return this.http.put<IStaffDetails>('http://127.0.0.1:8000/deletestaffdetails',obj.ID);
 
}

}
