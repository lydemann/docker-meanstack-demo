const path = require('path');
const express = require('express');

exports = module.exports = function(app) {

    const staticFilesPath = path.resolve('./static');
  
    app.get('/hello', (req, res) => res.send('Hello World!'))

    app.use(express.static(staticFilesPath))

    // All other routes should redirect to the index.html
    app.route('/*')
      .get((req, res) => {
        res.sendFile(staticFilesPath + '/index.html');
      });
  }
  