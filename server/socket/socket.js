import express from 'express';
import http from 'http';
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


export const GetReciverSocketId = (userId) => {
    return userMap[userId]
}

const userMap = {}

const userMapForOnlineUser = {}
io.on("connection", (socket) => {
    console.log("User Connected")

    const userId = socket.handshake.query.userId

    if (userId) {
        userMap[userId] = socket.id
        userMapForOnlineUser[userId] = socket.id
    }

    socket.emit("OnlineUser", Object.keys(userMapForOnlineUser))

    socket.on("disconnect", () => {
        console.log("User Disconnected")
        delete userMapForOnlineUser[userId]
        socket.emit("OnlineUser", Object.keys(userMapForOnlineUser))
    })
})

export { app, server, io }