import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
    MONGO_DB_NAME = os.getenv("MONGO_DB_NAME")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    # Flask-Session Configuration
    SESSION_TYPE = "filesystem"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True

    # ✅ CORS + Cookie Settings for cross-origin credentials
    SESSION_COOKIE_SAMESITE = "None"  # Allow cross-origin cookies
    SESSION_COOKIE_SECURE = False     # Disable Secure in local dev (True if using HTTPS)
