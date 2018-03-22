const formidable = require('formidable');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();

	form.parse(req, (err, fields, files) => {
		const oldpath = files.filetoupload.path;
		const newpath = 'videos/' + files.filetoupload.name;
		fs.rename(oldpath, newpath, function(err) {
			if (err) throw err;
			res.write('File uploaded and moved!');
			res.end('File uploaded');
		});
	});
});
app.listen(3000, () => console.log('Up & Running...'));
