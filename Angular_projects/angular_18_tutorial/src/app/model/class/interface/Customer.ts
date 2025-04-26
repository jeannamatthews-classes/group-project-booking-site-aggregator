export class Customer {
    CustomerID: number;
    Reservations: string;	
    Name: string;   
    Email_Id	:string;
    Phone_num: number;	
    Preferences	:  string;
    Payment_history: string;	
    Check_In_Date: string;	
    Check_Out_Date : string;	
    Loyalty_programs: string;
    Inventory:string;
    Inventory_price:number

    constructor() {
        this.CustomerID = 0;
        this.Reservations = '';
        this.Name = '';
        this.Email_Id = '';
        this.Phone_num = 0;
        this.Preferences = '';
        this.Payment_history = '';
        this.Check_In_Date = '';
        this.Check_Out_Date = '';
        this.Loyalty_programs = '';
        this.Inventory = '';
        this.Inventory_price = 0;
    }

}
