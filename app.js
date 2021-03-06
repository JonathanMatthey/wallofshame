var express = require('express');
//require the Twilio module and create a REST client

var app = express();
// app.use(express.urlencoded());
var port = process.env.PORT || 3000;

app.get('/send-message', function(req, res) {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  var numb = req.query.to;
  var msg = req.query.msg;

  console.log('sending msg to '+numb+ ' - ' + msg);

  //Send an SMS text message
  client.sendMessage({

    to: numb, // Any number Twilio can deliver to
    from: '+12054028908', // A number you bought from Twilio and can use for outbound communication
    body: msg // body of the SMS message

  }, function(err, responseData) { //this function is executed when a res is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

      console.log(responseData.from); // outputs "+14506667788"
      console.log(responseData.body); // outputs "word to your mother."
      res.json({"result":"success","body":{"from":responseData.from,"to":numb,"msg":responseData.body}});

    } else {
      console.log(err);
      res.json({"result":"err","error":err});
    }
  });

});

app.get('/', function(req, res) {
  res.json("hi")
});

app.listen(port);
console.log('Express app started on port ' + port);
