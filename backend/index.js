import mongoose from "mongoose";
import {} from "dotenv/config.js";
import express from "express";
import cors from 'cors'
import routeProduct from './route/routeProduct.js'
// import path from 'path'
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// import router from "./route/routeProduct.js";

const app= express()




mongoose.connect(
    process.env.MONGO_DB,
    {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }
);

const db = mongoose.connection;

db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Database connected...'))

app.use(cors())
app.use(express.json())
// app.use(express.static(path.resolve(__dirname,'build')))
app.use(routeProduct)

// app.use('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'build','index.html'))
// })


app.listen(3001,()=>{
    console.log('server start...')
})