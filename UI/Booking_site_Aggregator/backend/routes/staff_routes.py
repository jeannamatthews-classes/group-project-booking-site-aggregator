from fastapi import APIRouter, HTTPException
from backend.models import StaffDetails
from backend.database import cursor, conn

router = APIRouter()

@router.get("/fetch")
def get_all_staff():
    try:
        cursor.execute('SELECT * FROM public."Staff_details" ORDER BY "ID" ASC;')
        data = cursor.fetchall()
        return {"data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/add")
def add_staff(details: StaffDetails):
    try:
        insert_query = """
            INSERT INTO public."Staff_details"
            ("ID", "Name", "Gender", "Phone_number", "Email_Id", "DOB", "Shift", "Attends", "Manager")
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(insert_query, (
            details.ID,
            details.Name,
            details.Gender,
            details.Phone_number,
            details.Email_Id,
            details.DOB,
            details.Shift,
            details.Attends,
            details.Manager
        ))
        conn.commit()
        return {"message": "Staff added successfully"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/delete/{id}")
def delete_staff(id: int):
    try:
        cursor.execute('DELETE FROM public."Staff_details" WHERE "ID" = %s', (id,))
        conn.commit()
        if cursor.rowcount:
            return {"message": "Staff deleted successfully"}
        return {"message": "Staff not found"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
