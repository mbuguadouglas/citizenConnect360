from flask import Flask, jsonify, request

app = Flask(__name__)

# create a route endpoint
# @app.route('/')
# def home():
#     return 'hello world'

# work with get request
@app.route('/get-user/<user_id>')
def get_user(user_id):
    user_data = {
        'user_id' : user_id,
        'name' : 'Mbugua Douglas',
        'email' : 'daagi210@gmail.com'
   }

    #    get query parameters passed from db
    extra = request.args.get('extra')
    if extra:
        user_data['extra'] = extra

    return jsonify(user_data), 200


# work on post request
@app.route('/add-user', methods=['GET','POST'])
def add_user():
    if request.method == 'POST':
        # get data submitted as json
        data = request.get_json()

        # add data to db

        return jsonify(data), 200






if __name__ == '__main__':
    app.run(debug=True)