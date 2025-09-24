import { PORT } from "./config/env.js";
import express from "express";
import { Server } from "socket.io";

const app = express(); // make an express app

// serve the files in 'public/' directory statically
app.use(express.static("public"));

const expressServer = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const io = new Server(expressServer, {});

// io is the socket server
// on is a regular js/node event listener
io.on("connection", (socket) => {
  console.log("✅ New client connected:", socket.id);

  socket.on("disconnect", (reason) => {
    console.log("❌ Client disconnected:", socket.id, "Reason:", reason);
  });

  // console.log(socket.handshake.query);
  // console.log(socket.handshake);

  socket.emit("welcome", [1, 2, 3]);

  socket.on("thankYou", (data) => {
    console.log(`Message from client: ${data}`);
  });
});
