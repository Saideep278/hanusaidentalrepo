import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import rev_routes from './routes/index_routes.js'
import app_routes from './routes/appoint_routes.js'

dotenv.config()
const app = express()
app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))
app.use(cors())

app.listen(8080,()=>{
    console.log("server started");
})

app.get('/',(req,res)=>{
    res.send("Hi i am index.js of backend")
})

app.use('/reviews',rev_routes)
app.use('/apps',app_routes)



mongoose.connect(process.env.CONNECTION_URL)
    .then(console.log("db connected"))
    .catch((error)=>console.log(error))