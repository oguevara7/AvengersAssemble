const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const publicDir = path.join(__dirname)


app.use(express.static(publicDir))


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname)+'/index.html');
});

app.get('/messages',function(req,res){
  res.sendFile(path.join(__dirname)+'/messages.html');
});

app.get('/moments',function(req,res){
  res.sendFile(path.join(__dirname)+'/moments.html');
});


app.listen(port, function() {
  console.log('Ayay! Live on port 3000.');
})
