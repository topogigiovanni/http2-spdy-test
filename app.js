var express = require('express');
var fs = require('fs');
var spdy = require('spdy');

var app = express();

const PORT = 8090;

app.get('/', function (req, res) {
	res.sendFile('./app.html', { root : __dirname})
})

app.get('/images/:id', function (req, res) {
	res.sendFile('./images/' + req.params.id, { root : __dirname})
})

var options = {
  key: fs.readFileSync('localhost.key'),
  //cert: fs.readFileSync('ssl.crt')
  cert: fs.readFileSync('localhost.crt')
};

/*
	// https://stackoverflow.com/questions/8169999/how-can-i-create-a-self-signed-cert-for-localhost
	
	# Use 'localhost' for the 'Common name'
	openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout localhost.key -out localhost.crt

*/

spdy.createServer(options, app).listen(PORT, () => {
	console.log('Listen port ' + PORT)
});
