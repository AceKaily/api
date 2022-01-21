const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

// Import Routes
const channelRoute = require('./routes/channel')

app.use('/channel', channelRoute)

app.get('/', (req, res) => {
    res.send('we are On home');
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Hi")
})

let PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});