import express from 'express'
import { PORT } from './config';
import { Request,Response } from 'express';

const app = express();

app.use(express.json());

app.get("/get",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Hello World!"
    })
    return
})

app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
})

