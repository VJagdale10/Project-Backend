var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vidhi1009!',
    database: 'nodejs'
});

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(request, response) {
    // response.sendFile(path.join(__dirname + '/login.html'));
    response.sendFile(__dirname + '/public/login.html');

});

app.post('/public', function(req, res) {
    var username = req.body.username;
    var pass1 = req.body.pswd1;

    var data = {
        "username": username,
        "password1": pass1
    }
});


app.post('/public', function(req, res) {
    var username = req.body.username;
    var pass1 = req.body.pswd1;
    var pass2 = req.body.pswd2;
    var email = req.body.email;

    var data = {
        "username": username,
        "password1": pass1,
        "password2": pass2,
        "email": email

    }
});

app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3000, () => {
    console.log('server is up at port 3000')
});