const formidable = require('formidable');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const irr = require('./irr-verbs');

// console.log(irr.find('hello, today I ate some pasta, and ran off.'));
// console.log(irr.find('He wound up being arrested.'));
// console.log(irr.find("I didn't,"));

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm();

	// form.on('progress', function(bytesReceived, bytesExpected) {
	// 	console.log(Math.round(bytesReceived / bytesExpected * 100) + '%');
	// });
  form.maxFileSize = 2000 * 1024 * 1024;

	form.parse(req, (err, fields, files) => {
    if(err) throw err

		const oldpath = files.filetoupload.path;
    const newpath = 'videos/' + files.filetoupload.name;

    fs.readdir('videos/', (err, files) => {

      if(err) throw err;
      if(files.length) fs.unlinkSync(`videos/${files[0]}`);
      fs.rename(oldpath, newpath, function(err) {

        if (err) throw err;
        res.send(`/${__dirname}/${newpath}`);
      });
    })
	});
});
app.listen(3000, () => console.log('Up & Running...'));
