from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_1"
mongo = PyMongo(app)

#Route for index.html (blank for now)
@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

# Route to render data.html template using data from Mongo
@app.route('/data')
def data():
    project_1 = [doc for doc in mongo.db.collection.find()]
    print(project_1)
    #for row in project_1:
    #    print(row)
    return render_template('data.html', project_1=project_1)

    #leave this, want to ask about this in class
    #project_1 = [doc for doc in mongo.db.collection.find()]
    #print(project_1)
    #return jsonify(project_1)
    #give error: TypeError: Object of type 'ObjectId' is not JSON serializable

if __name__ == "__main__":
    app.run(debug=True)