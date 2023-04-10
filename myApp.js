let express = require('express');
let app = express();
app.use("/public",express.static(__dirname + '/public'))
app.get("/", (request, response) => {
    //response.send("Hello Express")
    response.sendFile(__dirname + '/views/index.html')
})
app.get("/json", (request, reponse) => {
    reponse.json({message: "Hello json"})
})

console.log("Hello World")


































 module.exports = app;
