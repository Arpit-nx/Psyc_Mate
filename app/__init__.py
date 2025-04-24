import os
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_session import Session  # ✅ Added for session management
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize extensions
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'routes.login'
mongo = PyMongo()

def create_app():
    app = Flask(__name__)

    # SESSION CONFIG (important for cookie-based auth to work properly)
    app.config["SESSION_TYPE"] = "filesystem"
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_USE_SIGNER"] = True
    app.config["SESSION_COOKIE_NAME"] = "session"
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SAMESITE"] = "Lax"  # Use "None" if you're on HTTPS and cross-domain
    app.config["SESSION_COOKIE_SECURE"] = False  # Change to True if using HTTPS in prod
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "default_secret_key")

    # Initialize Flask-Session
    Session(app)

    # CORS setup to allow cookies from frontend
    CORS(
        app,
        resources={r"/api/*": {"origins": "http://localhost:8080"}},
        supports_credentials=True
    )

    # Load additional config from config.py
    app.config.from_object('config.Config')

    # Re-set secret_key in case it wasn't picked from .env
    app.secret_key = app.config.get("SECRET_KEY", "default_secret_key")

    # Initialize extensions
    bcrypt.init_app(app)
    login_manager.init_app(app)

    # Setup MongoDB
    mongo.init_app(app, uri=app.config["MONGO_URI"])
    app.config["MONGO_DB_NAME"] = os.getenv("MONGO_DB_NAME")
    mongo.db = mongo.cx[app.config["MONGO_DB_NAME"]]

    print("Using Database:", app.config["MONGO_DB_NAME"])
    try:
        mongo.db.command('ping')
        print("MongoDB connected successfully.")
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")

    # Register blueprints
    from .routes import routes
    app.register_blueprint(routes)

    # Show registered routes
    print(app.url_map)

    return app
