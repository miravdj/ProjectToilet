const express = require ('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});


app.listen(port);
