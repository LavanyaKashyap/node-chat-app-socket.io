/*jslint esversion: 6 */
const http = require('http');
const path = require('path')
const express = require('express'); //behind the scene express uses http 
const socketIO = require('socket.io');

const port = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log(`New user Connected ${socket}`);

    // socket.emit('newEmail' , {
    //     from:"Lavanya.kashyap@kpit.com",
    //     text : "Hello this is text",
    //     createdAt : 1233
    // });
    // socket.on('createEmail' , (newemail)=>{
    //     console.log(`Recieved the new data ${JSON.stringify(newemail)}`);
    // })
    socket.on('CreateMessage', (messageDetails) => {
        io.emit('newMessage', {from : messageDetails.from , text : messageDetails.text} ) 

    });
    // socket.emit('newMessage' , {from : "Server" , text : "Hello reciever" , createdAt : 1234987654});
    socket.on('disconnect', (socket) => {
        console.log(`User Just got Disconnected`);  //.on is the listener
    });
});

app.use(express.static(path.join(__dirname, '../public')));
// app.listen(port ,(connected)=>{
//     cons
//     console.log(`Connectted to the port ${port}`);
// })
server.listen(port, (connected) => {
    console.log(`Connected to the port ${port}`);
})