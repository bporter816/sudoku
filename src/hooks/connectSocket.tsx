// api/index.js

const URL = "ws://3.93.195.100/ws";
var socket = new WebSocket(URL);

// 3.93.195.100

let connect = () => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg: string) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
