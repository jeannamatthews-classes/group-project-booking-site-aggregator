/**
 * The ManagerDetails.ts file defines the IStaffDetails class, which represents
 *  the structure of staff details managed by a manager. It includes properties
 *  such as ID, Name, Gender, Phone_number, Email_Id, and DOB. The class also provides
 *  a constructor to initialize these properties with default values.
 */
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