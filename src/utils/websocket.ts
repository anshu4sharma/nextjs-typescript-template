import { io } from "socket.io-client";
export const socketServer = io("http://localhost:4000");
