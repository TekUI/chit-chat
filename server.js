var express = require('express');

var app = express();
 
 
//Hosting static files
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.redirect('/dist/views/index.html');
});

app.listen(4200,function(req,res){
	
});