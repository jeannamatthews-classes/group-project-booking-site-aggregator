# backend/routes/auto_messaging.py
from fastapi import APIRouter
from datetime import datetime
from typing import List

router = APIRouter()

# Simulated database of auto-messages
scheduled_messages = [
    {
        "id": 1,
        "guest_id": 3,
        "message": "Welcome! Let us know if you need anything.",
        "send_at": "2025-04-11T17:00:00",
        "status": "scheduled"
    },
    {
        "id": 2,
        "guest_id": 5,
        "message": "Hope your stay is great so far!",
        "send_at": "2025-04-11T20:00:00",
        "status": "scheduled"
    }
]

@router.get("/api/scheduled-messages", response_model=List[dict])
def get_scheduled():
    return scheduled_messages

@router.get("/api/auto-messaging/run")
def run_auto_messaging():
    now = datetime.now().isoformat()
    sent = []
    for msg in scheduled_messages:
        if msg['status'] == 'scheduled' and now >= msg['send_at']:
            msg['status'] = 'sent'
            msg['sent_at'] = now
            sent.append(msg)
    return {"sent": sent, "count": len(sent)}
