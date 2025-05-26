# flask server that links to a DAO

from flask import Flask, request, jsonify, abort, render_template
from bookDAO import BookDAO

bookDAO = BookDAO()
app = Flask(__name__,  static_url_path='', static_folder='static')

@app.route('/')
def index():
    return render_template('bookviewer.html')

# getall
# curl http://127.0.0.1:5000/books

@app.route('/books', methods=['GET'])
def getall():
        return jsonify(bookDAO.getAll())

#find by id
# curl http://127.0.0.1:5000/books/1

@app.route('/books/<int:id>', methods=['GET'])
def findbyid(id):
        return jsonify(bookDAO.findByID(id))

#create
@app.route('/books', methods=['POST'])
def create():
        jsonstring = request.json
        book = {}

        if "title" not in jsonstring:
                abort(403)
        book["title"] = jsonstring["title"]
        if "author" not in jsonstring:
                abort(403)
        book["author"] = jsonstring["author"]
        if "price" not in jsonstring:
                abort(403)
        
        book["price"] = jsonstring["price"]
        
        return jsonify(bookDAO.create(book))

#update
@app.route('/books/<int:id>', methods=['PUT'])
def update(id):
        jsonstring = request.json
        book = {}

        if "title" in jsonstring:
                book["title"] = jsonstring["title"]
        if "author" in jsonstring:
                book["author"] = jsonstring["author"]
        if "price" in jsonstring:
                book["price"] = jsonstring["price"]
        
        return jsonify(bookDAO.update(id, book))

#delete
@app.route('/books/<int:id>', methods=['DELETE'])
def delete(id):
        return jsonify(bookDAO.delete(id))


if __name__ == "__main__":
    app.run(debug = True)
