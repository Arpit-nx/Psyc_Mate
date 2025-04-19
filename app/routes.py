from flask import Blueprint, jsonify, request, session
from flask_login import login_user, logout_user, login_required, current_user
from app import mongo,bcrypt
from app.models import User

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

    if not name or not email or not password:
        return jsonify({"message": "Missing fields"}), 400

    # Check if MongoDB connection is working
    if mongo.db is None:
        return jsonify({"error": "MongoDB connection failed"}), 500

    # Check if users collection exists
    try:
        existing_user = mongo.db.users.find_one({"email": email})
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
        "password": hashed_password
    }

    try:
        # Insert into MongoDB
        result = mongo.db.users.insert_one(user)
    except Exception as e:
        return jsonify({"error": f"Error inserting user into MongoDB: {e}"}), 500

    # Optional: Fetch user back to confirm insertion
    new_user = mongo.db.users.find_one({"_id": result.inserted_id})

    return jsonify({
        "message": "User created successfully",
        "user": {
            "id": str(new_user["_id"]),
            "name": new_user["name"],
            "email": new_user["email"]
        }
    }), 201

@routes.route("/api/login", methods=["POST"])
def login():
    data = request.json
    print("Received login data:", data)

    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing email or password"}), 400

    user = User.get_by_email(data.get("email"))
    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    if bcrypt.check_password_hash(user.password, data.get("password")):
        session['user_id'] = str(user.id)
        session['email'] = user.email
        session['name'] = user.name

        login_user(user)

        return jsonify({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.name,
            }
        })

    return jsonify({"error": "Invalid email or password"}), 401

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