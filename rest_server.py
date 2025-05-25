#simple flask server
from flask import Flask, url_for, request, redirect, abort

app = Flask(__name__, static_url_path='', static_folder='staticpages')

@app.route('/') #main page
def index():
    return "hello"

@app.route('/books', methods=['GET']) #get all books
def get_all():
    return "get all"

@app.route('/books/<int:id>', methods=['GET']) #get books by specific id
def find_by_id():
    return "find by id"

@app.route('/books', methods=['POST']) #create book
def create():
    jsonstring = request.json

    return f"create {jsonstring}"

@app.route('/books/<int:id>', methods=['PUT']) #update book
def update(id):
    jsonstring = request.json

    return f"update {id} {jsonstring}"

@app.route('/books/<int:id>', methods=['DELETE']) #delete book
def delete(id):
    return f"delete {id}"

if __name__ == "__main__":
    app.run(debug=True)