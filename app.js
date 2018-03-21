const formidable = require('formidable');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();

	form.parse(req, (err, fields, files) => {
		res.send(files.filetoupload);
	});
});
app.listen(3000, () => console.log('Up & Running...'));
