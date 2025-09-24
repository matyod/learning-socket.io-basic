// console.log(io);
// const socket = io(`http://localhost:4000`);
// const socket = io({
//   query: {
//     meaningOfLife: 42,
//   },
//   auth: {
//     secret: "This is a secret",
//   },
// });

const socket = io(); // client is served from the same domain as server

// socket.on("welcome", (data) => {
//   console.log(data);

//   socket.emit("thankYou", [4, 5, 6]);
// });

const messagesForm = document.getElementById("messages-form");
const userMessage = document.getElementById("user-message");

console.log(messagesForm);
console.log(userMessage);

messagesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = userMessage.value;
  userMessage.value = ""; // clear input field

  // This socket is sending an event to the server
  socket.emit("messageFromClientToServer", newMessage);
});

socket.on("messageFromServerToAllClients", (newMessage) => {
  const messagesUl = document.getElementById("messages");
  const messagesList = document.createElement("li");
  messagesList.classList.add("list-unstyled");

  messagesList.textContent = newMessage;
  messagesUl.appendChild(messagesList);
});
