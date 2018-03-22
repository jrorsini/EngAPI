const formidable = require('formidable');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const irr = require('./irr-verbs');

console.log(irr);

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();

	form.on('progress', function(bytesReceived, bytesExpected) {
		console.log(Math.round(bytesReceived / bytesExpected * 100) + '%');
	});

	form.parse(req, (err, fields, files) => {
		const oldpath = files.filetoupload.path;
		const newpath = 'videos/' + files.filetoupload.name;
		fs.rename(oldpath, newpath, function(err) {
			if (err) throw err;
			res.send('File uploaded');
		});
	});
});
app.listen(3000, () => console.log('Up & Running...'));
