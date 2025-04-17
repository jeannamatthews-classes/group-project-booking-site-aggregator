from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from backend.database import conn, cursor
from backend.models import StaffDetails
from backend.routes import staff_routes, auth, mock_data

"""Main file for the FastAPI application. This file initializes the FastAPI app, sets up CORS middleware, 
and includes the routers for different modules. It also defines the root endpoint. It uses staff_routes
auth, and mock_data modules for handling different routes. 

Returns:
    _type_: FastAPI app instance
"""
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hotel Booking Aggregator API"}

app.include_router(staff_routes.router, prefix="/staff", tags=["Staff"])
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(mock_data.router, tags=["Mock API"])
