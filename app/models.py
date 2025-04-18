from flask_login import UserMixin
from app import mongo, login_manager
from bson.objectid import ObjectId

@login_manager.user_loader
def load_user(user_id):
    user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
    if user:
        return User(str(user["_id"]), user["email"], user["password"])
    return None

class User(UserMixin):
    def __init__(self, user_id, email, password):
        self.id = str(user_id)  # Convert to string here
        self.email = email
        self.password = password

    @staticmethod
    def get_by_email(email):
        user = mongo.db.users.find_one({"email": email})
        if user:
            return User(user["_id"], user["email"], user["password"])
        return None

    @staticmethod
    def create(email, password):
        user_id = mongo.db.users.insert_one({"email": email, "password": password}).inserted_id
        return User(user_id, email, password)
