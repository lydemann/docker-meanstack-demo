const path = require('path');
const express = require('express');

exports = module.exports = function(app) {

    const staticFilesPath = path.resolve('./static');
  
    app.get('/hello', (req, res) => res.send('Hello World!'))
}
  