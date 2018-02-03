const path = require('path');
const express = require('express');
const config = require('./config');

exports = module.exports = function(app) {

    const staticFilesPath = path.resolve('./static');
  
    app.get('/hello', (req, res) => res.send('Hello World!'))

    app.use(express.static(staticFilesPath))

  }
  