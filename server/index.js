import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 9000
const mongoDbUrl = process.env.MONGO_URL

mongoose.connect(mongoDbUrl)
    .then(res => console.log("MongoDb is conneted"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/auth", userRoute)

app.get("/", (req, res) => {
    res.json({ msg: "Server Started" })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})