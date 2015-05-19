var express = require('express');
//require the Twilio module and create a REST client
var client = require('twilio')('AC18f37a0f522bb8bab1d36ea30274ff5c', 'a6f6c14b6187220176d780b2a125de55');

var app = express();
// app.use(express.urlencoded());
var port = process.env.PORT || 3000;

app.get('/send-message', function(req, res) {
  var numb = req.query.to;
  var msg = req.query.msg;

  console.log('sending msg to '+numb+ ' - ' + msg);

  // //Send an SMS text message
  // client.sendMessage({

  //   to: numb, // Any number Twilio can deliver to
  //   from: '+12054028908', // A number you bought from Twilio and can use for outbound communication
  //   body: msg // body of the SMS message

  // }, function(err, responseData) { //this function is executed when a res is received from Twilio

  //   if (!err) { // "err" is an error received during the request, if any

  //     console.log(responseData.from); // outputs "+14506667788"
  //     console.log(responseData.body); // outputs "word to your mother."

  //   } else {
  //     console.log(err);
        // res.json({"result":"err","error":err});
  //   }
  // });
  //
  res.sendStatus(200)

});

app.get('/', function(req, res) {
  res.json("hi")
});

app.listen(port);
console.log('Express app started on port ' + port);
