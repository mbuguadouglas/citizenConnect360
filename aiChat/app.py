from flask import Flask, jsonify,render_template, request,flash
from dotenv import load_dotenv
import pyodbc
import os

load_dotenv('.env')
app = Flask(__name__)

# print(os.getenv('USERNAME'), USERNAME)
# being implicitly converted to admin. work on later
USERNAME = 'sa'
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

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
cursor = conn.cursor()


# cursor.execute(getAllUsers)

# records = cursor.fetchall()
# for r in records:
#     print(f"{r.id}\t{r.name}\t{r.email}")


# create a route to get all users from the db
@app.route('/users', methods=['GET','POST'])
def get_users():
    print('radaaaa')
    if request.method =='GET':
        # create all the queries to be used
        getAllUsers = """
                SELECT 
                * FROM users;
            """

        # execute the query
        cursor.execute(getAllUsers)

        try:
            users = cursor.fetchall()

            # print the users to the console
            # for r in users:
            #     print(f"{r.id}\t{r.name}\t{r.email}")
    
            return render_template('index.html')
        except Exception as e:
            print(e)

    return render_template('users.html',users=users)


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




if __name__ == '__main__':
    app.run(debug=True)