export class IStaffDetails {
    ID: number;
    Name: string;
    Gender: string;
    Phone_number: number;
    Email_Id: string;
    DOB: string;
    
    
    constructor(){
      this.ID=0;
      this.Name='';
      this.Gender='',
      this.Phone_number=0;
      this.Email_Id='';
      this.DOB='';
    }
}