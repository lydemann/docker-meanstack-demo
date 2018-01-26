const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
// console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
// mongoose.connect(config.mongo.uri, config.mongo.options);
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
// });

require('./routes')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
