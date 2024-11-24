from app import db, User, Order
from werkzeug.security import generate_password_hash

db.create_all()

# Add initial users
user1 = User(name='John Doe', email='john@example.com', password=generate_password_hash('password'))
user2 = User(name='Jane Smith', email='jane@example.com', password=generate_password_hash('password'))


order1 = Order(id=1, user_id=1, status="Ordered", neurodegenerative_score="31", diabetes_score="25", obesity_score="95")
order2 = Order(id=2, user_id=2, status="Ordered", neurodegenerative_score="15", diabetes_score="91", obesity_score="70")

# db.session.add(user1)
# db.session.add(user2)
db.session.add(order1)
db.session.add(order2)
db.session.commit()

print("Database populated with initial users.")