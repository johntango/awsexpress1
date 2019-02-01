var express = require('express');

var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('<h1>my lucky number is ' + num+'</h1>');
});

app.listen(3000);
console.log("Running on port 3000");
