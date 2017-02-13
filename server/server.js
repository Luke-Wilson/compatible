const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));


app.get('/api/test', (req,res) => {
  console.log(req.body);
  res.send('GET received');
});


const port = 3003;
app.listen(port, () => {
  console.log('server is listening on', port);
});
