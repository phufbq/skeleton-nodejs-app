const express = require('express');
const app = express();

const qp = require('./queryProcessor.js')

// Server setup 

app.get('/', function(req, res) {
  res.send("The server is running!");
});

app.get('/api', function(req, res) {
  res.send(qp.processQuery(req.query.q));
});

const port = process.env.PORT || 5000

app.listen(port, function() {
  console.log('Example app started.');
});