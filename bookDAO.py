import dbconfig as cfg

class BookDAO:
    def getcursor(self):
        self.connection = cfg.connect_mysql()
        self.cursor = self.connection.cursor()
        return self.cursor

    def closeAll(self):
        self.cursor.close()
        self.connection.close()

    def getAll(self):
        cursor = self.getcursor()
        sql = "SELECT * FROM book"
        cursor.execute(sql)
        results = cursor.fetchall()
        self.closeAll()
        return results 

    def findByID(self, id):
        cursor = self.getcursor()
        sql = "SELECT * FROM book WHERE id = %s"
        cursor.execute(sql, (id,))
        result = cursor.fetchone()
        self.closeAll()
        return result 

    def create(self, book):
        cursor = self.getcursor()
        sql = "INSERT INTO book (title, author, price) VALUES (%s, %s, %s)"
        values = (book.get("title"), book.get("author"), book.get("price"))
        cursor.execute(sql, values)
        self.connection.commit()
        book["id"] = cursor.lastrowid
        self.closeAll()
        return book

    def update(self, id, book):
        cursor = self.getcursor()
        sql = "UPDATE book SET title = %s, author = %s, price = %s WHERE id = %s"
        values = (book.get("title"), book.get("author"), book.get("price"), id)
        cursor.execute(sql, values)
        self.connection.commit()
        self.closeAll()

    def delete(self, id):
        cursor = self.getcursor()
        sql = "DELETE FROM book WHERE id = %s"
        cursor.execute(sql, (id,))
        self.connection.commit()
        self.closeAll()
        print("delete done")