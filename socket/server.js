
const io = require('socket.io')(4004,{
    cors:{
        origin: "http://localhost:3000"
    }
})

var userCount =0;
io.on("connection",(socket)=>{
    console.log(`user ${socket.id} connected! Total Connections ${userCount}`);
    userCount++;
    io.sockets.emit("detail", {message:userCount , handle:"server"})
    
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })
    
    socket.on("disconnect",(reason)=>{
        userCount--;
        socket.emit('disconnected')
        console.log(`user ${socket.id} disconnected! Total Connections ${userCount}`);
        io.sockets.emit("detail", {message:userCount , handle:"server"})
        
    })
    
    socket.on("alert",(data)=>{
        console.log("alert raised!");
        io.sockets.emit("alert", data)
    })

})

console.log("socket");