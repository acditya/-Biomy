from app import db, User, Order
from werkzeug.security import generate_password_hash

db.create_all()

# Add initial users
user1 = User(name='John Doe', email='john@example.com', password=generate_password_hash('password'))
user2 = User(name='Jane Smith', email='jane@example.com', password=generate_password_hash('password'))

db.session.add(user1)
db.session.add(user2)
db.session.commit()

print("Database populated with initial users.")