const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/test'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/test/' })
})

app.listen(8080)