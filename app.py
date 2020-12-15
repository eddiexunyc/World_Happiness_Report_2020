from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_1"
mongo = PyMongo(app)

# Route to render index.html template using data from Mongo
@app.route('/')
def home():
    project_1 = mongo.db.y2015.find({})
    for y2015data in project_1:
        print(y2015data)
    return render_template('home.html', project_1=project_1)
    col = project_1.y2015
    array = list(col.find())
    print(array)
if __name__ == "__main__":
    app.run(debug=True)