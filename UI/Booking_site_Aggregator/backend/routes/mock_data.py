# backend/routes/mock_data.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import random
import datetime

router = APIRouter()

# In-memory mock data
mock_guests = [
    {"id": i, "name": f"Guest {i}", "email": f"guest{i}@email.com", "phone": f"+123456789{i}"}
    for i in range(1, 11)
]

mock_bookings = [
    {
        "id": i,
        "guest_id": random.randint(1, 10),
        "check_in": str(datetime.date.today() + datetime.timedelta(days=i)),
        "check_out": str(datetime.date.today() + datetime.timedelta(days=i+2)),
        "status": random.choice(["upcoming", "active", "completed"]),
        "room": random.choice(["Deluxe", "Suite", "Standard"])
    }
    for i in range(1, 6)
]

mock_messages = [
    {
        "id": i,
        "guest_id": random.randint(1, 10),
        "message": f"Hello, I need help with booking {i}",
        "timestamp": str(datetime.datetime.now()),
        "sender": "guest"
    }
    for i in range(1, 6)
]

class Guest(BaseModel):
    id: int
    name: str
    email: str
    phone: str

class Booking(BaseModel):
    id: int
    guest_id: int
    check_in: str
    check_out: str
    status: str
    room: str

class Message(BaseModel):
    id: int
    guest_id: int
    message: str
    timestamp: str
    sender: str

@router.get("/api/guests", response_model=List[Guest])
def get_guests():
    return mock_guests

@router.get("/api/bookings", response_model=List[Booking])
def get_bookings():
    return mock_bookings

@router.get("/api/messages", response_model=List[Message])
def get_messages():
    return mock_messages
