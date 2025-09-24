// console.log(io);
// const socket = io(`http://localhost:4000`);
const socket = io({
  query: {
    meaningOfLife: 42,
  },
  auth: {
    secret: "This is a secret",
  },
}); // client is served from the same domain as server

socket.on("welcome", (data) => {
  console.log(data);

  socket.emit("thankYou", [4, 5, 6]);
});
