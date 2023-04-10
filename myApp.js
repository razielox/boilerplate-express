let express = require('express');
let app = express();
require('dotenv').config()
app.use("/public",express.static(__dirname + '/public'))
app.get("/", (request, response) => {
    //response.send("Hello Express")
    response.sendFile(__dirname + '/views/index.html')
})
app.get("/json", (request, response) => {
    process.env.MESSAGE_STYLE === 'uppercase'

        ? response.json({message: "HELLO JSON"})
        : response.json({message: "Hello json"})
    
})


console.log("Hello World")


































 module.exports = app;
