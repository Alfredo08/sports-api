const express = require('express');
const bodyParser = require('body-parser');
const sportsRouter = require('./router');
const app = express();
const jsonParser = bodyParser.json();

app.use('/sports/api', jsonParser, sportsRouter);

app.listen(8080, () => {
	console.log('Your app is running in port 8080');
});






