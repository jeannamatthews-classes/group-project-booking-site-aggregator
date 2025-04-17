from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date
"""This file contains the models for the Booking Site Aggregator project.
It defines the data structures used in the application, including User, Booking, and Staff details.
The models are used to validate and serialize/deserialize data exchanged between the frontend and backend.
The models are built using Pydantic, which provides data validation and settings management using Python type annotations.
"""
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
