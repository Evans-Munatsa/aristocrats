
var twilioClient = require('twilio')('AC50bf3fb0d666ed3e4c14786922c90297', '3194f65266d65dd4eaf54736716a0a98');
// var twilioClient = require('twilio')(accountSid, authToken);

// var body = body;
//   // var cellnumber = body.cellnumber;
//   var message = message;

twilioClient.messages.create({
  to: '+27612615003',
  from: '+12015286375',
  body: "Heyyyyyyyyyyyy Sam!!!!!!!!!!!!",
  // body: message,
}, function(err, message) {
  if (err) {
    console.log("An error has occurred" + err);
    // response.status(500).send('Unable to send sms: ' + err);
  } else {
    console.log("Success!!!!")
  };
  // console.log(message.sid);
  // response.sendStatus(200);
});
