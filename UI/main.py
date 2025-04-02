#INSTRUCTIONS FOR USE
#pip install fastapi uvicorn
#uvicorn main:app --reload --host 0.0.0.0 --port 8000
#If that doesn't work try:
#cd group-project-booking-site-aggregator/UI
#uvicorn main:app --reload
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from datetime import datetime

app = FastAPI()

# In-memory storage for messages (use a database in production)
messages = []

# Message model
class Message(BaseModel):
    sender: str
    text: str
    timestamp: datetime = datetime.now()

@app.get("/messages", response_model=List[Message])
async def get_messages():
    """Get all messages."""
    return messages

@app.post("/messages", response_model=Message)
async def post_message(message: Message):
    """Post a new message."""
    if not message.sender or not message.text:
        raise HTTPException(status_code=400, detail="Sender and text are required")
    messages.append(message)
    return message