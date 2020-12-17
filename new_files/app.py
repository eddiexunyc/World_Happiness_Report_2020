from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify
import json
from bson import json_util



# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_1"
mongo = PyMongo(app)

#Route for index.html (blank for now)
@app.route("/")
@app.route("/home")
@app.route("/home.html")
def home():
    return render_template("home.html")

# Route to render data.html template using data from Mongo
@app.route('/data')
def data():
    #for mac users
    project_1 = [doc for doc in mongo.db.collection.find()]
    #print(project_1)
    return json_util.dumps(project_1)

if __name__ == "__main__":
    app.run(debug=True)