from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date

class StaffDetails(BaseModel):
    ID: int
    Name: str
    Gender: str
    Phone_number: str
    Email_Id: EmailStr
    DOB: date
    Shift: str
    Attends: str
    Manager: Optional[str] = None
