const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;







const app = express();


app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/templates/index.html'));
});


app.listen(PORT, ()=> {
	console.log('server running '+PORT);
});