from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_pymongo import PyMongo
from flask_cors import CORS  # Import CORS for cross-origin requests
from dotenv import load_dotenv
import os

bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'routes.login'
mongo = PyMongo()
load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object('config.Config')

    app.secret_key = app.config.get("SECRET_KEY", "default_secret_key")

    bcrypt.init_app(app)
    login_manager.init_app(app)

    # **CRITICAL**: Tell PyMongo where the URI is
    mongo.init_app(app, uri=app.config["MONGO_URI"])

    # Explicitly specify the database to use
    app.config["MONGO_DB_NAME"] = os.getenv("MONGO_DB_NAME")
    print("Using Database:", app.config["MONGO_DB_NAME"])

    # **CRITICAL**: Initialize the database connection to a specific database
    mongo.db = mongo.cx[app.config["MONGO_DB_NAME"]]

    print("Connecting to MongoDB...")
    print("mongo.db value before command:", mongo.db)

    try:
        mongo.db.command('ping')  # Use the database connection to ping
        print("MongoDB connected successfully.")
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")

    from .routes import routes
    app.register_blueprint(routes)

    return app
