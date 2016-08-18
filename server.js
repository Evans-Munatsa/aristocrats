var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session'); // used for HTTP authentication and authorisation
var mysql = require('mysql'); // node-mysql module
var bodyParser = require('body-parser');
var patients = require('./routes/patients');
<<<<<<< HEAD
var scripts = require('./routes/scripts');
var script_items = require('./routes/script_items');
=======
var http = require('http');
>>>>>>> master

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
<<<<<<< HEAD
app.get('/scripts', scripts.show);
app.get('/script_items', script_items.show);
app.get('/script_items/add', script_items.showAdd);
app.post('/script_items/add_script_items', script_items.add);


=======
app.get('/patients/add', patients.showAdd);
app.post('/patients/add', patients.add);
>>>>>>> master

// start the server
var server = app.listen(3000);

