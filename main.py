from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Allow the frontend app running on localhost:4200
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)

try:
    conn = psycopg2.connect(
        host="localhost",
        database="Booking_site_aggregator_DB",
        user="postgres",
        password="October@202121",
        port="5432",
        cursor_factory=RealDictCursor
    )
    cursor = conn.cursor()
    print("Database connected ✅")
except Exception as error:
    print(f"❌ Error connecting to database: {error}")
    conn = None  # Set conn to None to avoid errors if the connection fails
    cursor = None;

@app.get("/hotels")
def root():
    return {"message": "Hello World"}

@app.get("/fetchstaffdetails")
def root():
    try:
        cursor.execute('SELECT * FROM public."Staff_details" ORDER BY "ID" ASC;')
        post = cursor.fetchall()  # Fetch all results
        print(post)  # Print the fetched data
        return {"data": post}  # Return the fetched data
    except Exception as e:
        return {"error": str(e)}  # Return the error message if any

@app.post("/addstaffdetails")
def add_staff_details(ID: int, Name: str, Gender: str, Phone_number: int, Email_Id: str, DOB: str, Shift: str, Attends: str):
    try:
        cursor.execute('INSERT INTO public."Staff_details" ("ID","Name", "Gender", "Phone_number","Email_Id","DOB","Shift","Attends") VALUES (%s, %s, %s, %s, %s, %s, %s, %s);',
                       (ID, Name, Gender, Phone_number, Email_Id, DOB, Shift, Attends))
        conn.commit()  # Commit the transaction
        return {"message": "Staff details added successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()  # Rollback in case of error
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")

    except Exception as e:
        conn.rollback()  # Rollback any general error
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
    
@app.delete("/deletestaffdetails")
def delete_staff_details(ID: int):
    if cursor is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        cursor.execute('DELETE FROM public."Staff_details" WHERE "ID" = %s;', (ID,))
        
        if cursor.rowcount == 0:
            return {"message": "No staff found with the given ID"}
        
        conn.commit()  
        return {"message": "Staff details deleted successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()  
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")

    except Exception as e:
        conn.rollback()  
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
    
@app.put("/updatestaffdetails/{ID}")
def update_staff_details(ID: int, Name: str = None, Gender: str = None, Phone_number: int = None, Email_Id: str = None, DOB: str = None, Shift: str = None, Attends: str = None):
    if cursor is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        # Building dynamic update query
        update_fields = []
        values = []
        
        if Name is not None:
            update_fields.append('"Name" = %s')
            values.append(Name)
        if Gender is not None:
            update_fields.append('"Gender" = %s')
            values.append(Gender)
        if Phone_number is not None:
            update_fields.append('"Phone_number" = %s')
            values.append(Phone_number)
        if Email_Id is not None:
            update_fields.append('"Email_Id" = %s')
            values.append(Email_Id)
        if DOB is not None:
            update_fields.append('"DOB" = %s')
            values.append(DOB)
        if Shift is not None:
            update_fields.append('"Shift" = %s')
            values.append(Shift)
        if Attends is not None:
            update_fields.append('"Attends" = %s')
            values.append(Attends)
        
        if not update_fields:
            raise HTTPException(status_code=400, detail="No fields provided for update")

        values.append(ID)
        query = f'UPDATE public."Staff_details" SET {", ".join(update_fields)} WHERE "ID" = %s;'
        
        cursor.execute(query, tuple(values))
        
        if cursor.rowcount == 0:
            return {"message": "No staff found with the given ID"}
        
        conn.commit()
        return {"message": "Staff details updated successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")
    
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
