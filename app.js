const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Router Imports
const userRouter = require('./routes/user');
const registerRouter = require('./routes/register');


//Middleware
app.use(express.json()); //Body-Parser accepts only JSON

//Routes 
app.use('/user', userRouter);
app.use('/register', registerRouter)

//Database Connection
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Database Connected');
    })

//Server Setting
app.listen(3000, () => console.log("Server up and Running"));