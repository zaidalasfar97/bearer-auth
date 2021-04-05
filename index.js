'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
    .then(() => {
        server.startup(process.env.PORT);
    })
    .catch((e) => {
        console.log('__CONNECTION ERROR__', e.message);
    })