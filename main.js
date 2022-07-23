/*
let tous = require('./functions');

console.log(tous.bonjour())
console.log(tous.addition(4,2))
console.log(tous.afficherHumain('michael', 35))
*/

//Appel du framework express
const express = require('express');
//instance de express
const app = express();
//node module http
const http = require('http');
//node module file system
const fs = require('fs');

//Creer un server
const server = http.createServer(app);
//Seveur avec socket.io
const { Server } = require("socket.io");
//instance du serveur 
const io = new Server(server);
//le port d'ecoute
const port = 3000;

//la route de base
app.get('/', (request, response) => {
    //response.send('Le chat socket.io');
    //Appel du fichier static css
    app.use(express.static(__dirname + '/'));
    //Appel d'un fichier html 
    response.sendFile(__dirname + '/index.html');
   
});


 //test du serveur io

io.on('connection', (socket) => {
    console.log('Vous etes connectez au chat !');
    //Quand on envoie un message depuis le front
    socket.on('ChatMessage', (msg) => {
        console.log('Votre message ' + msg);
        io.emit('ChatMessage', msg);
    })
    socket.on('disconnect', () => {
        console.log('Vous etes deconnectez du chat !');
      });
});



//Ecoute
server.listen(port, () => {
    console.log(`Le serveur est demarrer sur le port : http://localhost/${port}`)
});

