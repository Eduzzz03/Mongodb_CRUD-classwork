const express = require("express");
const morgan = require("morgan");
require('dotenv').config();
const db = require('./mongodb')
const studentRoute = require('./Routes/studentRoute');

const app = express();
app.use(morgan('dev'));
app.use('/api',studentRoute)

const PORT = process.env.PORT


app.listen(PORT,(req,res)=>{
    console.log(`Server is up and running in port ${PORT}`)
})