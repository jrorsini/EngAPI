const formidable = require('formidable');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const request = require('request');
const irr = require('./irr-verbs');

app.use(cors());
// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/search/:word', (req, res) => {
	request(
		`https://glosbe.com/gapi/translate?from=eng&dest=fra&format=json&phrase=${
			req.params.word
		}`,
		function(error, response, body) {
			if (!error && response.statusCode === 200) {
				res.send(body);
			} else {
				res.send(error);
			}
		}
	);
});

app.post('/add', (req, res) => {
	console.log(req.body);
});

app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();

	// form.on('progress', function(bytesReceived, bytesExpected) {
	// 	console.log(Math.round(bytesReceived / bytesExpected * 100) + '%');
	// });
	form.maxFileSize = 2000 * 1024 * 1024;

	form.parse(req, (err, fields, files) => {
		if (err) throw err;

		const oldpath = files.filetoupload.path;
		const newpath = 'videos/' + files.filetoupload.name;

		fs.readdir('videos/', (err, files) => {
			if (err) throw err;
			if (files.length) fs.unlinkSync(`videos/${files[0]}`);
			fs.rename(oldpath, newpath, function(err) {
				if (err) throw err;
				res.send(`/${__dirname}/${newpath}`);
			});
		});
	});
});
app.listen(1234, () => console.log('Up & Running...'));
