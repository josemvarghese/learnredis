const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;
const redis = require('redis');







const app = express();
const client = redis.createClient();
client.on('error', function (err) {
    console.log("Error " + err);
});	
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/addinfo',function(req, res, next) {
		console.log(req.body.name);
	console.log(req.body.desc);
	res.json({name:req.body.name});
});
app.get('*', (req, res) => {

  // const username='jose';
  // client.get(username, function(error, result) {
	 //  	if (result) {
	 //        console.log(result)
	 //    } 
	 //    else {
	 //      	client.setex(username, 60, 'jose');
	 //    }
  // });
  res.sendFile(path.join(__dirname, 'static/templates/index.html'));
});


app.listen(PORT, ()=> {
	console.log('server running '+PORT);
});