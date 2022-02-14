const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const dataJSON= require('./data/read_data.js').dataJSON
const config = require('./config.js')
   
// Init Express application
const app = express()

// Init Http server
const server= http.Server(app)

// Init socket object
const io = socketio(server)
 

//On user connection to the socket
io.on('connection', function(socket) {
    console.log('A user connected');
   
    // Iterate through each data type
   ["temperature","power"].forEach((dataType,index) => {
        
        //Iterate through each register within the data type
        dataJSON[dataType].values.forEach((element,index) => {
        setTimeout( () => {
           
            // Get the unit and the value as fields for the object to be emited in the socker
            element["unit"]=dataJSON[dataType].unit;
            // Parse de value to force it to be a float 
            element["value"]=parseFloat(element.value);
            console.log(element)

            // Emit to an event called as the data type, the object 
            // created with the register information (value and unit)
            socket.emit(dataType,element)
        },5000 * index )
        
    });

   })
   
    //On disconnection to the socker
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
 
 // Listen to port in configuration
 server.listen(config.app.port, function() {
    console.log(`listening on *:${config.app.port}`);
 });

