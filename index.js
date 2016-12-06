var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/bug', function(req,res){
	//console.log(__dirname);
    filePath = __dirname + '/public/buggerwars/index.html';
    res.sendFile(filePath);
});

app.get('/bugger', function(req,res){
    filePath = __dirname + '/public/buggerwars/index.html';
    res.sendFile(filePath);
});

// app.get('/', function(request, response) {
//   response.render('public/views');
// });

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});