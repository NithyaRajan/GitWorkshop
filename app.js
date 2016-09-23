var express = require('express');

var app = express();

app.get('/', function(req, res) {  
	console.log(req);
	res.send('hello users');
});

app.listen(8008);