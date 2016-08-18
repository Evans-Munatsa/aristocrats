var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session'); // used for HTTP authentication and authorisation
var mysql = require('mysql'); // node-mysql module
var bodyParser = require('body-parser');
var patients = require('./routes/patients');

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
  password: 'root',
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

//set up HttpSession middleware
app.use(session({
  secret: 'my fortune cookie',
  cookie: {
    // maxAge: 60000
    maxAge: 600000
  }
}));


app.get('/', function(req, res) {
    res.render('home')
})

app.get('/patients', patients.show);

// start the server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server app listening at http://%s:%s', host, port);
});
