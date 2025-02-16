import express from 'express'
import cors from "cors"
import { PORT } from './config';
import { Request,Response } from 'express';
import deployRoutes from "./routes/deploy"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/get",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Hello World!"
    })
    return
})

app.use("/app/v1",deployRoutes)

app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
})

