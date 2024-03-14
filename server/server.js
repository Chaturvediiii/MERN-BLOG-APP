import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=>{
    console.log(err);
})

const app = express()

app.listen(3000,()=>{
    console.log('Listening at port 3000');
})