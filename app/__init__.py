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

    # CORS config (allow frontend to send cookies)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}}, supports_credentials=True)

    # Load config
    app.config.from_object('config.Config')

    # Secret key
    app.secret_key = app.config.get("SECRET_KEY", "default_secret_key")

    # ✅ Flask-Session setup
    app.config['SESSION_TYPE'] = 'filesystem'  # For local dev
    app.config['SESSION_PERMANENT'] = False
    Session(app)

    # Initialize extensions
    bcrypt.init_app(app)
    login_manager.init_app(app)

    # Setup MongoDB
    mongo.init_app(app, uri=app.config["MONGO_URI"])
    app.config["MONGO_DB_NAME"] = os.getenv("MONGO_DB_NAME")
    mongo.db = mongo.cx[app.config["MONGO_DB_NAME"]]

    print("Using Database:", app.config["MONGO_DB_NAME"])
    print("Connecting to MongoDB...")
    try:
        mongo.db.command('ping')
        print("MongoDB connected successfully.")
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")

    # Register blueprints
    from .routes import routes
    app.register_blueprint(routes)

    # Debug URL map
    print(app.url_map)

    return app
