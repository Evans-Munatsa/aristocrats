var express = require('express'),
    mysql = require('mysql'),
    path = require("path"),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars')

var app = express();


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.render('home')
})
//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 3000));
//start the app like this:
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});