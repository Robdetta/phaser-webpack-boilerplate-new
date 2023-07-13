const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const path = require('path');
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
    }   
})


const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {  
  res.sendFile(path.join('index.html'));
});


//socket handlers 
const registerUserHandlers = require('./socket.js');

//
server.listen(3000, () => {
    console.log('listening on *:3000');
});

const onConnection = (socket) => {
    registerUserHandlers(io, socket);
}

io.on('connection', onConnection);


