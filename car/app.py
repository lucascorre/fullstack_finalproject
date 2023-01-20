from models import db, CarModel
from flask import Flask, jsonify, abort, request
import json
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()
 
@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"}) 


@app.route('/car/create' , methods = ['POST'])
def createCar():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    car = CarModel(name=name, price=price, image = image)
    db.session.add(car)
    db.session.commit()
    return jsonify(car.to_json())
 
@app.route('/car/all')
def readAllCar():
    cars = CarModel.query.all()
    carsJson = []
    for car in cars:
        carsJson.append(car.to_json())
    return jsonify(carsJson)
 
 
@app.route('/car/<int:id>')
def readOneCar(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        return jsonify(car.to_json())
    return f"Car with id ={id} Doenst exist"
 
 
@app.route('/car/<int:id>/update',methods = ['GET','POST'])
def updateOneCar(id):
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    db.session.query(CarModel).filter(CarModel.id == id).update(
    {'name':name, 'price':price, 'image':image}, synchronize_session="fetch")
    db.session.commit()
    car = CarModel.query.filter_by(id=id).first()
    return jsonify(car.to_json())
 
 
@app.route('/car/<int:id>/delete', methods=['GET','POST'])
def deleteOneCar(id):
    car = CarModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
            return jsonify({"DELETE": "Success"})
        abort(404)


app.run(host='localhost', port=5000)