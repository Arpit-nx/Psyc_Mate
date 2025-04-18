import os
from dotenv import load_dotenv

load_dotenv()
# Load environment variables from .env file

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
    print("MONGO_URI:", MONGO_URI)  # Debugging line to check the value of MONGO_URI
    MONGO_DB_NAME = os.getenv("MONGO_DB_NAME")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    
    # Flask-Session Configuration (for storing session data)
    SESSION_TYPE = "filesystem"  # Use filesystem to store session data
    SESSION_PERMANENT = False  # Session is not permanent by default
    SESSION_USE_SIGNER = True  # To ensure session data is signed

