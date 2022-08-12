const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (client) => {
  client.on("event", (data) => {
    console.log("event");
  });

  client.on("disconnect", () => {
    console.log("disconnect");
  });
});

app.get("/", (req, res) => {
  console.log("ddd");
});

server.listen(3000);
