const express = require('express')
const app = express()
const mongoose = require("mongoose")

const cors = require('cors')
require('dotenv').config();

require('./db/conn')

const User = require('./models/userSchema')
const router = require('./routes/router')

const port = 8000


app.use(cors());
app.use(express.json());


app.use(router);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

