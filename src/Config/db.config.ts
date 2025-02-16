import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const connectionString = process.env.MONGODB_URI + ""

export const db = mongoose.connect(connectionString)
.then(res => {
    if(res)
    {
        console.log('Connected to DB successfully!')
    }
}).catch(err => {
    console.log(err)
})