from flask import Blueprint, jsonify, request, session
from flask_login import login_user, logout_user, login_required, current_user
from app import mongo,bcrypt
from app.models import User
from bson import ObjectId
from datetime import datetime

# Create a Blueprint
routes = Blueprint("routes", __name__)

@routes.route("/api/home", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to Psyc-Mate API"})
@routes.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()

    if not data:
        return jsonify({"message": "No data provided"}), 400

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    user_type = data.get("userType")  # Getting the userType

    if not name or not email or not password or not user_type:
        return jsonify({"message": "Missing fields"}), 400

    # Check if MongoDB connection is working
    if mongo.db is None:
        return jsonify({"error": "MongoDB connection failed"}), 500

    # Check if a user already exists in the appropriate collection
    collection = mongo.db[user_type + "s"]  # e.g., patients, interns, licensed

    try:
        existing_user = collection.find_one({"email": email})
    except Exception as e:
        return jsonify({"error": f"Error querying MongoDB: {e}"}), 500

    if existing_user:
        return jsonify({"message": "User already exists"}), 409

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create user document
    user = {
        "name": name,
        "email": email,
        "password": hashed_password,
        "user_type": user_type  # Include user type
    }

    try:
        # Insert into the appropriate collection based on userType
        result = collection.insert_one(user)
    except Exception as e:
        return jsonify({"error": f"Error inserting user into MongoDB: {e}"}), 500

    # Optional: Fetch user back to confirm insertion
    new_user = collection.find_one({"_id": result.inserted_id})

    return jsonify({
        "message": "User created successfully",
        "user": {
            "id": str(new_user["_id"]),
            "name": new_user["name"],
            "email": new_user["email"],
            "user_type": new_user["user_type"],  # Return user_type
        }
    }), 201

@routes.route("/api/login", methods=["POST"])
def login():
    data = request.json
    print("Received login data:", data)

    if not data or not data.get("email") or not data.get("password") or not data.get("userType"):
        return jsonify({"error": "Missing email, password, or user type"}), 400

    email = data.get("email")
    password = data.get("password")
    user_type = data.get("userType")
    
    # Determine the collection (e.g., users, interns, licensed, etc.)
    collection_name = user_type + "s"  # pluralize (e.g., intern => interns)
    collection = mongo.db[collection_name]

    user = collection.find_one({"email": email})
    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    if bcrypt.check_password_hash(user["password"], password):
        # Set session data
        session['user_id'] = str(user["_id"])
        session['email'] = user["email"]
        session['name'] = user["name"]
        session['user_type'] = user["user_type"]

        print("Session after login:", session)  # Check session data here for debugging

        return jsonify({
            "message": "Login successful",
            "user": {
                "id": str(user["_id"]),
                "email": user["email"],
                "name": user["name"],
                "user_type": user["user_type"],
            }
        })

    return jsonify({"error": "Invalid email or password"}), 401

@routes.route("/api/intern-profile", methods=["POST"])
def save_intern_profile():
    data = request.get_json()

    required_fields = ["name", "location", "skills", "email", "phoneNumber"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        intern_profile = {
            "name": data["name"],
            "location": data["location"],
            "skills": data["skills"],
            "email": data["email"],
            "phoneNumber": data["phoneNumber"],
            "created_at": datetime.utcnow()
        }

        result = mongo.db.intern_profiles.insert_one(intern_profile)

        return jsonify({
            "message": "Intern profile saved successfully",
            "profile_id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@routes.route("/api/user", methods=["GET"])
def get_user():
    print("Current session:", dict(session))
    # Check if the user is logged in (authentication required)
    if 'email' not in session:
        return jsonify({"error": "Not authenticated"}), 401

    email = session['email']
    user_type = session.get('user_type', 'intern')  # 'intern', 'licensed', etc.
    
    # Determine the correct collection to fetch the user data
    collection = mongo.db["intern_profiles"]  # Default to 'intern_profiles' for now

    # Fetch user data based on email
    user = collection.find_one({"email": email})
    if not user:
        return jsonify({"error": "User not found"}), 404

    # Return user data
    user_data = {
        "name": user["name"],
        "email": user["email"],
        "phone": user.get("phoneNumber", "Not available"),
        "location": user.get("location", "Not available"),
        "skills": user.get("skills", "Not available"),
        "education": user.get("education", "Not available"),
        "startDate": user.get("startDate", "Not available"),
        "avatar": user.get("avatar", "/default-avatar.svg"),
    }
    print("User data fetched:", user_data)  # Debugging line

    return jsonify({"user": user_data})

@routes.route('/api/therapists/find', methods=['POST'])
def find_therapist():
    data = request.get_json()
    title = data.get('title')
    print(f"User submitted: {title}")
    # Here you'd process the title and query your therapist DB or logic
    return jsonify({"message": f"We've received your input: {title}!"})

@routes.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"})

@routes.route("/api/register", methods=["POST"])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data.get("password")).decode("utf-8")
    user = User.create(data.get("email"), hashed_password)
    return jsonify({"message": "Account created successfully"})

@routes.route("/api/dashboard", methods=["GET"])
@login_required
def dashboard():
    return jsonify({"message": f"Welcome to your dashboard, {current_user.email}"})

@routes.route("/api/logout", methods=["POST"])
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"})