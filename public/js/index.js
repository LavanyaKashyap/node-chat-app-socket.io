'use strict'
var socket = io();
console.log(socket);
socket.on('connect', function () {
    // console.log(`Client is connected`);
    // socket.emit('createEmail', {to: "Lavanya.kashyap@kpit.com", text: "Heyyya!!"});
    // socket.emit('CreateMessage', {
    //     from: "Client",
    //     text: "Hello this is a create msessage event"
    // });

});
socket.on('disconnect', function () {
    console.log(`Client is Disconnected`);
});
// socket.on('newEmail' , function(emailData){
//     console.log('Client has recieved new email');
//     console.log(emailData);
// })
socket.on('newMessage' , function(message){
    console.log(`Recieved a message at client${message.text}`);
})


