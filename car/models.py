from flask_sqlalchemy import SQLAlchemy
 
db = SQLAlchemy()
 
class CarModel(db.Model):
    __tablename__ = "car"
 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    price = db.Column(db.String(255))
    image = db.Column(db.String(255))
 
    def __init__(self,name,price,image):
        self.name = name
        self.price = price
        self.image = image
 
    def __repr__(self):
        return f"{self.name}:{self.id}"

    def to_json(self):
        return {"id": self.id,
                "name": self.name,
                "price": self.price,
                "image": self.image}