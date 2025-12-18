import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from "./DB/db.js";
import route from './Routes/todoroutes.js';
dotenv.config()

const PORT=process.env.PORT||5000
const app=express();
connectDb();

app.use(express.json());
app.use(cors());
//http://localhost:5000/csbs
app.use('/csbs',route);
 app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
 })
