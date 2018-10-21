var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const config = require('./config/database');

//var mongoose = require('mongoose');
var mongojs = require('mongojs');
var index = require('./routes/index');
var events = require('./routes/events');

var port = 3000;
var app = express();
var MongoClient = mongojs('config.database');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/', events);
//mongoose.connect(config.database);

app.listen(port, function(){
    console.log('Server started on port '+ port);
});