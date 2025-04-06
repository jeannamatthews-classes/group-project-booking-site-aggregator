import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IStaffDetails } from '../../model/class/interface/StaffDetails';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  staffDetails: IStaffDetails[] | null = null;  // Expect an array of staff details

  http = inject(HttpClient);

  ngOnInit(): void {
    //this.getAllData();
  }

  
}
