import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json())
app.use(cookieParser())


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})