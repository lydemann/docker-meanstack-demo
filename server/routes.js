const path = require('path');
const express = require('express');

exports = module.exports = function(app) {
  
    app.get('/hello', (req, res) => res.send('Hello World!'))

    app.use(express.static(path.resolve('../client/dist')))

    // All other routes should redirect to the index.html
    app.route('/*')
      .get((req, res) => {
        res.sendFile(path.resolve('../client/dist') + '/index.html');
      });
  }
  