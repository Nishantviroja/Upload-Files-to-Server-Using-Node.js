const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const port = 80;

const app = express();

// default options
app.use(express.urlencoded())
app.use(fileUpload());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', function(req, res) {
  let sampleFile;
  let uploadPath;

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/upload/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err){
      res.send('File  not uploaded!  ;) ');
    }
    else{
    res.send('File uploaded!  ;) ');
    }
  });
});

app.listen(port, ()=>{
  console.log(`your app is now on --------- http://localhost
`)
})

