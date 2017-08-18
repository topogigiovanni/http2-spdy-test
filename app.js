const express = require('express');
const fs = require('fs');
const path = require('path');
const spdy = require('spdy');

const app = express();

const PORT = 8090;

app.get('/', (req, res) => {
	res.sendFile('./app.html', {
		root: __dirname
	});
});

app.get('/site', (req, res) => {
	//res.headers['Link'] = '</styles/easy.css>; rel=preload; as=style';
	res.setHeader('Link', '</styles/easy.css>; rel=preload; as=style');
	res.sendFile('./site.html', {
		root: __dirname
	});
});

app.get('/images/:id', (req, res) => {
	res.sendFile('./public/images/' + req.params.id, {
		root: __dirname
	});
});

app.use(express.static(path.join(__dirname, 'public')));

var options = {
	key: fs.readFileSync('localhost.key'),
	//cert: fs.readFileSync('ssl.crt')
	cert: fs.readFileSync('localhost.crt')
};

spdy.createServer(options, app).listen(PORT, () => {
	console.log('Listen port ' + PORT)
});
