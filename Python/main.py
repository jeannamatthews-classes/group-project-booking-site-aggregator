from datetime import date
from typing import Optional
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
def add_staff_details(ID: int, Name: str, Gender: str, Phone_number: int, Email_Id: str, DOB: str, Shift: str, Attends: str,Manager: str):
    try:
        cursor.execute('INSERT INTO public."Staff_details" ("ID","Name", "Gender", "Phone_number","Email_Id","DOB","Shift","Attends","Manager") VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);',
                       (ID, Name, Gender, Phone_number, Email_Id, DOB, Shift, Attends,Manager))
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
def update_staff_details(ID: int, Name: str = None, Gender: str = None, Phone_number: int = None, Email_Id: str = None, DOB: str = None, Shift: str = None, Attends: str = None,Manager: str = None):
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
        if Manager is not None:
            update_fields.append('"Manager" = %s')
            values.append(Manager)
        
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


# Customer APIs start here
@app.get("/fetchCustomerdetails")
def root():
    try:
        cursor.execute('SELECT * FROM public."Customer_details";')
        post = cursor.fetchall()  # Fetch all results
        print(post)  # Print the fetched data
        return {"data": post}  # Return the fetched data
    except Exception as e:
        return {"error": str(e)}  # Return the error message if any




@app.put("/updatesCustomerdetails/{CustomerID}")
def update_staff_details(CustomerID: int, Reservations: str = None, Name: str = None,
                         Email_Id : str=None,
                          Phone_num: int = None, Preferences: str = None, Payment_history: str = None,
                            Check_In_Date: Optional[date] = None,
    Check_Out_Date: Optional[date] = None,Loyalty_programs: int = None): 
    if cursor is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        # Building dynamic update query
        update_fields = []
        values = []
        
        if CustomerID is not None:
            update_fields.append('"CustomerID" = %s')
            values.append(CustomerID)
        if Reservations is not None:
            update_fields.append('"Reservations" = %s')
            values.append(Reservations)
        if Name is not None:
            update_fields.append('"Name" = %s')
            values.append(Name)
        if Email_Id is not None:
            update_fields.append('"Email_Id" = %s')
            values.append(Email_Id)
        if Phone_num is not None:
            update_fields.append('"Phone_num" = %s')
            values.append(Phone_num)
        if Preferences is not None:
            update_fields.append('"Preferences" = %s')
            values.append(Preferences)
        if Payment_history is not None:
            update_fields.append('"Payment_history" = %s')
            values.append(Payment_history)
        if Check_In_Date is not None:
            update_fields.append('"Check_In_Date" = %s')
            values.append(Check_In_Date)
        if Check_Out_Date is not None:
            update_fields.append('"Check_Out_Date" = %s')
            values.append(Check_Out_Date)
        if Loyalty_programs is not None:
            update_fields.append('"Loyalty_programs" = %s')
            values.append(Loyalty_programs)
        if not update_fields:
            raise HTTPException(status_code=400, detail="No fields provided for update")

        values.append(CustomerID)
        query = f'UPDATE public."Customer_details" SET {", ".join(update_fields)} WHERE "CustomerID" = %s;'
        
        cursor.execute(query, tuple(values))
        
        if cursor.rowcount == 0:
            return {"message": "No staff found with the given ID"}
        
        conn.commit()
        return {"message": "Customer details updated successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")
    
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


@app.delete("/deletecustomerdetails")
def delete_customer_details(CustomerID: int):
    if cursor is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        cursor.execute('DELETE FROM public."Customer_details" WHERE "CustomerID" = %s;', (CustomerID,))
        
        if cursor.rowcount == 0:
            return {"message": "No Customer_details found with the given ID"}
        
        conn.commit()  
        return {"message": "Customer_details details deleted successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()  
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")

    except Exception as e:
        conn.rollback()  
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


@app.post("/addcustomerdetails")
def add_staff_details(ID: int, Name: str, Gender: str, Phone_number: int, Email_Id: str, DOB: str, Shift: str, Attends: str,Manager: str):
    try:
        cursor.execute('INSERT INTO public."Staff_details" ("ID","Name", "Gender", "Phone_number","Email_Id","DOB","Shift","Attends","Manager") VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);',
                       (ID, Name, Gender, Phone_number, Email_Id, DOB, Shift, Attends,Manager))
        conn.commit()  # Commit the transaction
        return {"message": "Staff details added successfully"}
    
    except psycopg2.Error as e:
        conn.rollback()  # Rollback in case of error
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")

    except Exception as e:
        conn.rollback()  # Rollback any general error
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")


#Send Mail APIs start here
def send_email(to_email: str, subject: str, body: str):
    sender_email = "ankitmhadye1@gmail.com"
    sender_password = "abc"  # Use app-specific password if needed
    smtp_server = "smtp.gmail.com"
    smtp_port = 587

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, to_email, msg.as_string())


class EmailRequest(BaseModel):
    to_email: str
    subject: str
    body: str


@app.post("/send-email/")
def trigger_email(email: EmailRequest):
    try:
        send_email(email.to_email, email.subject, email.body)
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
