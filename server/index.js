import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import messageRoute from './routes/message.js'
import auth from './middleware/auth.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.js'
import cors from 'cors'
import FriendRoute from './routes/friend.js'
import { app, server } from './socket/socket.js'

dotenv.config()

const PORT = process.env.PORT || 9000
const mongoDbUrl = process.env.MONGO_URL

mongoose.connect(mongoDbUrl)
    .then(res => console.log("MongoDb is conneted"))
    .catch(err => console.log(err))

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/auth", authRoute)
app.use("/api/message", auth, messageRoute)
app.use("/api/user", userRoute)
app.use("/api/friend", FriendRoute)

app.get("/", (req, res) => {
    res.json({ msg: "Server Started" })
})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})