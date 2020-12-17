from flask import Flask, render_template, redirect, Response
from flask_pymongo import PyMongo
from flask import jsonify
import json
from bson import json_util



# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_1"
mongo = PyMongo(app)

#write a json file
def json_file(obj):
    with open("project_1", "w") as outfile:
        outfile.write(obj)


#Route for index.html (blank for now)
@app.route("/")
@app.route("/home")
@app.route("/index.html")
def home():
    return render_template("index.html")

# Route to render data.html template using data from Mongo
@app.route('/data')
def data():
    project_1 = [doc for doc in mongo.db.collection.find()]
    return render_template("data.html", project_1 = project_1)
    

@app.route('/getMyJson')
def getMyJson():
    project_1 = [doc for doc in mongo.db.collection.find()]
    return json_util.dumps(project_1)

if __name__ == "__main__":
    json_file(getMyJson())
    app.run(debug=True)