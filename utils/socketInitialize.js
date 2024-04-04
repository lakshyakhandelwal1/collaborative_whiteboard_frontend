import { io } from "socket.io-client";
const socketInitialize = () => {
  const socket = io("https://collaborative-whiteboard-backend.onrender.com");
  return socket;
};

export default socketInitialize;
