const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

const routes = require('./routes/routes.js');


app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));

//connection to routes goes here
require('./routes/routes.js')(app, express);


const port = 3003;
app.listen(port, () => {
  console.log('server is listening on', port);
});
