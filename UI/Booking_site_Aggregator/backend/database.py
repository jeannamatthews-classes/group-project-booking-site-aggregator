import os
from dotenv import load_dotenv
from psycopg2.extras import RealDictCursor
import psycopg2

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path)

try:
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        port=os.getenv("DB_PORT"),
        cursor_factory=RealDictCursor
    )
    cursor = conn.cursor()
    print("✅ Database connected.")
except Exception as e:
    print(f"❌ Database connection failed: {e}")
    conn = None
    cursor = None
