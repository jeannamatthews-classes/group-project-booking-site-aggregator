from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt
from backend.database import cursor, conn

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
