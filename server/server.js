var path = require("path");
const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

// console.log (__dirname + "/../public");
// console.log(publicPath);

const app = express();

var server = http.createServer(app);

var io = socketio(server);

io.on("connection",(socket)=>{
  console.log("New User Connected!");

  socket.on("disconnect", ()=>{
    console.log ("client disconnected");
  })
})

// Setting up a static directory.
app.use(express.static(publicPath));

server.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
