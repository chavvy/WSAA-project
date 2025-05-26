import pymysql

def connect_mysql():
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='',
        cursorclass=pymysql.cursors.DictCursor 
    )
    return connection