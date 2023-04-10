let express = require('express');
let app = express();
require('dotenv').config()
app.use('/', (request, response, next) => {
    console.log(`${request.method} ${request.path} - ${request.ip}`)
    next()
})
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

app.get("/now", (request, response, next) => {
    request.time = new Date().toString()
    next() 
},
    (request, response) => {
        response.json({time: request.time})
    
})


console.log("Hello World")


































 module.exports = app;
