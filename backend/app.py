from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import openai

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///µbiomy.db'
db = SQLAlchemy(app)

# OpenAI API key (replace with your own key)
openai.api_key = 'YOUR_OPENAI_API_KEY'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.String(50), nullable=False, default="Unordered")
    neurodegenerative_score = db.Column(db.Integer, nullable=True)
    diabetes_score = db.Column(db.Integer, nullable=True)
    obesity_score = db.Column(db.Integer, nullable=True)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    new_user = User(name=data['name'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({"message": "Login successful", "name": user.name}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/order', methods=['POST'])
def order_kit():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user:
        new_order = Order(user_id=user.id, status="Ordered")
        db.session.add(new_order)
        db.session.commit()
        return jsonify({"message": "Order placed successfully"}), 201
    return jsonify({"message": "User not found"}), 404

@app.route('/results/<int:user_id>', methods=['GET'])
def get_results(user_id):
    order = Order.query.filter_by(user_id=user_id).first()
    if order:
        return jsonify({
            "status": order.status,
            "neurodegenerative_score": order.neurodegenerative_score,
            "diabetes_score": order.diabetes_score,
            "obesity_score": order.obesity_score
        })
    return jsonify({"message": "Order not found"}), 404

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    scores = data['scores']
    
    # Generate a prompt based on the scores
    prompt = f"Neurodegenerative score: {scores['neurodegenerative_score']}%, Diabetes score: {scores['diabetes_score']}%, Obesity score: {scores['obesity_score']}%. What can you tell me about these diseases?"
    
    # Call OpenAI API
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=150
    )
    
    return jsonify({'response': response.choices[0].text.strip()})

if __name__ == '__main__':
    if not db.engine.table_names():
        db.create_all()

    app.run(debug=True)