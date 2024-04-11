import mongoose from 'mongoose'
import 'dotenv/config'

export function ConnectionToDb() {
    mongoose.connect(process.env.MONGO_URL)
        .then(res => console.log("MongoDb is conneted"))
        .catch(err => console.log(err))
}