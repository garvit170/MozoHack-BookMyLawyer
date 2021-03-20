const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5000;

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongo Connected!!!')
}).catch(err => {
    console.log(err)
});

app.listen(PORT, () => {
    console.log(`app started ${PORT}`)
});