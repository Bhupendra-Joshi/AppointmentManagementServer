require('dotenv/config')

const express = require('express');
const mongoose = require('mongoose');
const SellersRoute = require('./routes/sellers');
const bodyParser = require('body-parser');

const app = express();

// ROUTES

app.use(bodyParser.json());
app.use('/sellers', SellersRoute)

app.get('/', (request, response) => {
    response.send('We are on home');
})


mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (info) => {
        console.log("DB connection success!!", process.env.DB_CONNECTION,info);
    })
app.listen(3000);