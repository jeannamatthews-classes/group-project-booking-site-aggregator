import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStaffDetails } from '../model/class/interface/StaffDetails';

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
