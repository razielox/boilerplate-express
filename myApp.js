let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
//middleware for check all the requests and log variables
app.use('/', (request, response, next) => {
    console.log(`${request.method} ${request.path} - ${request.ip}`)
    next()
})

//expose static directory for resources 
app.use("/public",express.static(__dirname + '/public'))
app.get("/", (request, response) => {
    //response.send("Hello Express")
    response.sendFile(__dirname + '/views/index.html')
})
//environment variable for check before response
app.get("/json", (request, response) => {
    process.env.MESSAGE_STYLE === 'uppercase'

        ? response.json({message: "HELLO JSON"})
        : response.json({message: "Hello json"})
    
})
 
//middleware chain
app.get("/now", (request, response, next) => {
    request.time = new Date().toString()
    next() 
},
    (request, response) => {
        response.json({time: request.time})
})

//router parameters
app.get('/:word/echo', (request,response) => {
    response.json({echo: request.params.word})
})

//router query parameters
/**
 * the same route is gonna have get and post method
 * so this example is gona be chained with the app.route(path).get(handler).post(handler) ... etc
 */
app.route('/name')
.get((request, response) => {
    response.json({name: `${request.query.first} ${request.query.last}`})
})


console.log("Hello World")


































 module.exports = app;
