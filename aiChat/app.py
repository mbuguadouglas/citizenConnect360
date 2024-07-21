# from flask import Flask, jsonify, request
import pyodbc
import os
from dotenv import load_dotenv


load_dotenv('.env')
# app = Flask(__name__)

# import the variables in .env
USERNAME = 'sa'

# use string interpolation to create a connection string variable
connectionString = f"""
    DRIVER={{ODBC Driver 17 for SQL Server}};
    SERVER={os.getenv('SERVER')};
    DATABASE={os.getenv('DATABASE')};
    UID={USERNAME};
    PWD={os.getenv('PASSWORD')};
"""

# connect to mssql database
conn = pyodbc.connect(connectionString)

# create all the queries to be used
getAllUsers = """
        SELECT 
        * FROM users;
"""



cursor = conn.cursor()
cursor.execute(getAllUsers)

records = cursor.fetchall()
for r in records:
    print(f"{r.id}\t{r.name}\t{r.email}")



# create a route endpoint
# @app.route('/')
# def home():
#     return 'hello world'

# # work with get request
# @app.route('/get-user/<user_id>')
# def get_user(user_id):
#     user_data = {
#         'user_id' : user_id,
#         'name' : 'Mbugua Douglas',
#         'email' : 'daagi210@gmail.com'
#    }

#     #    get query parameters passed from db
#     extra = request.args.get('extra')
#     if extra:
#         user_data['extra'] = extra

#     return jsonify(user_data), 200


# # work on post request
# @app.route('/add-user', methods=['GET','POST'])
# def add_user():
#     if request.method == 'POST':
#         # get data submitted as json
#         data = request.get_json()

#         # add data to db

#         return jsonify(data), 200






# if __name__ == '__main__':
#     app.run(debug=True)



 

# # with dotenv
# SERVER = os.getenv('SERVER')
# DATABASE = os.getenv('DATABASE')
# USERNAME = os.getenv('USERNAME')
# PASSWORD = os.getenv('PASSWORD')

# print(SERVER, DATABASE, USERNAME, PASSWORD)

# # ce
# connectionString = f'''
# DRIVER={{ODBC Driver 17 for SQL Server}}
# SERVER={SERVER}
# DATABASE={DATABASE}
# UID={USERNAME}
# PWD={PASSWORD}
# '''