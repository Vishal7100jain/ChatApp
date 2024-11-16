import express from 'express';
import http from 'http';
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://chatapp-k0b4.onrender.com/",
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"]
    }
});

export const GetReciverSocketId = (userId) => {
    return userMap[userId]
}

const userMap = {}

const userMapForOnlineUser = {}
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId

    if (userId) {
        userMap[userId] = socket.id
        userMapForOnlineUser[userId] = socket.id
    }

    socket.emit("OnlineUser", Object.keys(userMapForOnlineUser))

    socket.on("disconnect", () => {
        delete userMapForOnlineUser[userId]
        socket.emit("OnlineUser", Object.keys(userMapForOnlineUser))
    })
})

export { app, server, io }
