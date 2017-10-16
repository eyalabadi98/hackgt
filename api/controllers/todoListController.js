'use strict';
var request = require("request");

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.send_coupon = function(req, res) {

  
  var request = require("request");
  
  var options = { method: 'POST',
    url: 'URL_HERE',
    headers: 
     { 'postman-token': '26a0303b-e631-748c-92ad-ee05416a50c1',
       'cache-control': 'no-cache',
       'nep-enterprise-unit': 'UNIT_ENTER JERE',
       'content-type': 'application/json',
       authorization: 'AccessToken TOKE_NHERE',
       'nep-application-key': 'APP_LEY' },
    body: 
     { orderId: '12933568625326903507',
       orderBeginDateTime: '2017-10-31T15:37:31.877Z',
       items: 
        [ { sequenceId: 6,
            itemCode: '012345678905',
            itemName: 'COUPON_REWARD',
            quantity: { units: 1, unitType: 'SIMPLE_QUANTITY' } } ] },
    json: true };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
    console.log("Response", response);
  

  var options = { method: 'POST',
  url: 'URL_HERE',
  headers:
   { 'postman-token': '60f6193a-a124-9a8a-f830-3fcf6bdec169',
     'cache-control': 'no-cache',
     authorization: 'Basic AUTHORIZATION_HERE',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData:
   { from: 'Mailgun Sandbox <postmaster@mail.maccabigamesjcc.me>',
     to: "<eyalabadi98@hotmail.com>",
     subject: "We are sorry- Coupon code",
     text: 
     "Hello, We are reaching out you in regards to your recent purchase with us. \n We unforntunaly cannot fullfil your order, thus we are  \n attaching a 10% off coupon code:  "
    } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(JSON.stringify(body));
  responseSend = responseSend + JSON.stringify(body);
  //res.json(body);
});

console.log('Respomse',responseSend);
res.json({ message: "Requests Sent Succesfully", success: true, response: response  });

});
};

exports.request_info = function(req, res) {
  res.json({
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


  })
}





exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  //Task.findById(req.params.taskId, function(err, task) {
  Task.find({ team: req.params.taskId }, function(err, task) {
    if (err)
      res.send(err);

    res.json({ message: "Requests Sent Succesfully",email: task[0].email });
  });
};




exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({team: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.create_team = function(req, res) {
  console.log('Create_team body', req.body);
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    console.log('Task Return', task);
    res.json(task);
  });
};
