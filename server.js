const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 5000,
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/APIAUTH');
//middle wares
app.use(morgan('dev'));
app.use(bodyParser.json());




//routes

var user = require('./routes/users')
app.use('/user', user)




app.listen(port, () => {
    console.log(port)
})