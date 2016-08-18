var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session'); // used for HTTP authentication and authorisation
var mysql = require('mysql'); // node-mysql module
var bodyParser = require('body-parser');
var patients = require('./routes/patients');
var scripts = require('./routes/scripts');
var script_items = require('./routes/script_items');
var display_otp = require('./routes/display_otp');
var send_otp = require('./routes/send_otp');


var moment = require('moment');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var jsonParser = bodyParser.json(); // create application/json parser
var app = express();

app.use(express.static(__dirname + '/public'));

var myConnection = require('express-myconnection'); // express-myconnection module
var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'Leander247365',
  port: 3306,
  database: 'doctors_orders'
};
var showNavBar = true;

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.render('home')
})

app.get('/patients', patients.show);
//app.get('/send_otp', send_otp.show);
app.get('/display_otp', display_otp.show);
app.get('/scripts', scripts.show);
app.get('/script_items', script_items.show);
app.get('/script_items/add', script_items.showAdd);
app.post('/script_items/add_script_items', script_items.add);


app.get('/patients/add', patients.showAdd);
app.post('/patients/add', patients.add);

var twilioClient = require('twilio')('AC50bf3fb0d666ed3e4c14786922c90297', '3194f65266d65dd4eaf54736716a0a98');

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/send_otp", function (request, response) {
  var body = request.body;
  var cellnumber = body.cellnumber;
  var message = body.message;

  console.log('send sms to', cellnumber + ', text', message);

  twilioClient.messages.create({
    to: '+27612615003',
    from: '+12015286375',
    body: 'Your script OTP is 3476',
  }, function (err, message) {
    if (err) {
      console.log(err);
      response.status(500).send('Unable to send sms: ' + err);
    }
    console.log(message.sid);
    //response.sendStatus(200);
    response.render('send_otp');
  });

});





// start the server
var server = app.listen(3000);
