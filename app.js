var express = require('express');
//require the Twilio module and create a REST client

var app = express();
// app.use(express.urlencoded());

app.get('/send-message', function(req, response) {
  var numb = req.query.to;
  var msg = req.query.msg;

  console.log('sending msg to '+numb+ ' - ' + msg);

  // //Send an SMS text message
  // client.sendMessage({

  //   to: numb, // Any number Twilio can deliver to
  //   from: '+12054028908', // A number you bought from Twilio and can use for outbound communication
  //   body: msg // body of the SMS message

  // }, function(err, responseData) { //this function is executed when a response is received from Twilio

  //   if (!err) { // "err" is an error received during the request, if any

  //     console.log(responseData.from); // outputs "+14506667788"
  //     console.log(responseData.body); // outputs "word to your mother."

  //   } else {
  //     console.log(err);
        // response.json({"result":"err","error":err});
  //   }
  // });
  //
  response.json({"result":"success"});

});

app.listen(3000);
console.log('Express app started on port ' + 3000);
