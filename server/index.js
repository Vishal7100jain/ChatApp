import e from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import bodyParser from 'body-parser'
import messageRoute from './routes/message.js'
import auth from './middleware/auth.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.js'
import FriendRoute from './routes/friend.js'
import { app, server } from './socket/socket.js'
import path from 'path'
import { ConnectionToDb } from '../Mongodb.js'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 9000
ConnectionToDb()

const __dirname = path.resolve()

// Allow requests from your frontend origin
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add methods as needed// If you're using cookies or session-based authentication
}));


app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/auth", authRoute)
app.use("/api/message", auth, messageRoute)
app.use("/api/user", userRoute)
app.use("/api/friend", FriendRoute)

app.use(e.static(path.join(__dirname, "/client/dist")))

app.get("/", (req, res) => {
    res.json({ msg: "Server Started" })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})