from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt
from backend.database import cursor, conn

"""This is a FastAPI file that handles the authentication of users. It uses a key and 
algorithm to encode the JWT token. It also uses the passlib library to hash the password and verify it.
It has two endpoints:
/signup and /login. The /signup endpoint is used to register a new user and the /login endpoint is used to log in an existing user.
It connects to a PostgreSQL database and uses psycopg2 to execute SQL queries.
It uses the pydantic library to validate the input data and the fastapi library to create the API endpoints.
It uses the CryptContext class from the passlib library to hash and verify passwords.
It uses the jwt library to encode and decode the JWT token.
It uses the HTTPException class from the fastapi library to handle errors and exceptions.

Raises:
    HTTPException: status code 400 detal: error
    HTTPException: status code 401 detal: invalid credentials

Returns:
    _type_: functions that handle the authentication of users
"""
router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "mysecret"
ALGORITHM = "HS256"

class User(BaseModel):
    Username: str
    Password: str

@router.post("/signup")
def signup(user: User):
    hashed_pw = pwd_context.hash(user.Password)
    try:
        cursor.execute('INSERT INTO public."Credentials" ("Username", "Password") VALUES (%s, %s)', (user.Username, hashed_pw))
        conn.commit()
        return {"message": "User registered"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login")
def login(user: User):
    cursor.execute('SELECT * FROM public."Credentials" WHERE "Username" = %s', (user.Username,))
    result = cursor.fetchone()
    if not result or not pwd_context.verify(user.Password, result["Password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode({"sub": user.Username}, SECRET_KEY, algorithm=ALGORITHM)
    return {"token": token}
