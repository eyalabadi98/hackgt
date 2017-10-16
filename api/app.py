#from Profile import Profile
from flask import Flask, jsonify
import random
#from json_data import funny_data
from flask import url_for
from flask import abort
from flask import make_response
from flask import request
#from flask_pymongo import PyMongo
import json
from bson import ObjectId
#from PyMongo import Connection
import http.client
import requests


#from json_data import funny_quotes

app=Flask(__name__)


#app.config['MONGO_DBNAME'] = 'restdb'
#app.config['MONGO_URI'] = 'mongodb://localhost:27017/restdb'
#mongo = PyMongo(app)


@app.route("/api/sendCoupon",methods=["POST"])
def sendCoupon():
  # conn = http.client.HTTPSConnection("hackgt-api.ncrcloud.com")
  data1 = request.get_data()
  #print(data1)
  dataJSON = request.json
  print(dataJSON['id'])

  

  url = "url"
  payload = "{\n\t\"orderId\": \"12933568625326903507\",\n\t\"orderBeginDateTime\": \"2017-10-31T15:37:31.877Z\",\n\t\"items\": [{\n\t\t\"sequenceId\": 6,\n\t\t\"itemCode\": \"012345678905\",\n\t\t\"itemName\": \"COUPON_REWARD\",\n\t\t\"quantity\": {\n\t\t\t\"units\": 1,\n\t\t\t\"unitType\": \"SIMPLE_QUANTITY\"\n\t\t}\n\t}]\n}"
  headers = {
      'nep-application-key': "APPKEY",
      'authorization': "AccessToken AUTHOR ",
      'content-type': "application/json",
      'nep-enterprise-unit': "UNIT7",
      'cache-control': "no-cache",
      'postman-token': "b24ea9e1-4262-0f37-873c-f5333aede4ad"
      }

  response = requests.request("POST", url, data=payload, headers=headers)

  print(response.text)
  code = "10OFF"
  #code = response.sellingEngineNotifications.couponRewards.couponCode
  print("Body is")
  print("Code is "+ code)
  r = requests.post(
    "https://api:key-a@api.mailgun.net/v3/mail.domain.me/messages",
    data={"from": "HackGT <postmaster@mail.maccabigamesjcc.me>",
          "to": "<from>",
          "subject": "We are sorry - Coupon Code",
          "text": "Hello, We are reaching out you in regards to your recent purchase with us. \n Unforntunaly we cannot fullfil your order, thus we are  \n attaching a 10 percent off coupon code: " + code  + " Please use this code to take advantge of some of our opportunities, Thank you for working with us "
  })
  print(r)
    
  return jsonify({'result' : "Return "})


# @app.route('/api/bloggers', methods=['GET'])
# def get_all_bloggers():
#   blogger = mongo.db.bloggers.find()
#   output = []
#   #for s in blogger.find():
#     #output.append({'name' : s['name1'], 'distance' : s['distance1']})
#   return jsonify({'result' : blogger})


# @app.route("/api/data",methods=["GET"])
# def json_data():
#     quotes =  funny_data()  #data.serialize()
#     nr_of_quotes = len(quotes)
#     selected_quote = quotes[0]
#     return jsonify(selected_quote)

@app.route("/api",methods=["GET"])
def user_by_name():
    
    obect = {
    "Employees": 25,
    "ProductNutellaStock": 100,
    "ProductShampooStocl": 160,
    "ProductShoeStock": 200,
    "ProductGloveStock": 100,
    "ProductMeatStock": 300,
    "Workers": [
      {
      "Name": "Joseph Smith",
      "CurrentOrderFulfillment": "10140401314957083098",
      "TimeRemaning": 4,
      "TimeIn": "9:00AM",
      "TimeOut": "3:00PM",
      "WorkerID": 100,
      "WorkerImage" : "http://absorbmarketing.com/wp-content/uploads/2015/01/Picture-of-person.png"
    },
    {
      "Name": "Jeff Bezos",
      "CurrentOrderFulfillment": "12933568625326903507",
      "TimeRemaning": 6,
      "TimeIn": "8:30AM",
      "TimeOut": "3:50PM",
      "WorkerID": 101,
      "WorkerImage" : "https://wallpaperscraft.com/image/jason_statham_actor_person_bristles_man_brunette_18978_3840x2400.jpg"
    },
    {
      "Name": "Luis Guitierrez",
      "CurrentOrderFulfillment": "09636876798255167785",
      "TimeRemaning": 2,
      "TimeIn": "8:39AM",
      "TimeOut": "2:50PM",
      "WorkerID": 102,
      "WorkerImage" : "http://fijione.tv/wp-content/uploads/2013/12/pope1.jpg"
    },
    {
      "Name": "Samuel Jackson",
      "CurrentOrderFulfillment": "10272089328867450099",
      "TimeRemaning": 2,
      "TimeIn": "8:39AM",
      "TimeOut": "2:50PM",
      "WorkerID": 102,
      "WorkerImage" : "http://fijione.tv/wp-content/uploads/2013/12/pope1.jpg"
    },
  ] 
    }
    return jsonify(obect)


# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return json.JSONEncoder.default(self, o)




if __name__ == "__main__":
    app.run(debug=True)
