const express = require('express');
const app = express()

//Routes 
app.get('/', (req,res) => {
    res.send("You are live");
});


//Server Setting
app.listen(3000, () => console.log("Server up and Running"));