import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config'; //얘 없으면 밑의 PORT는 undefined라고 나옴  
import router from './routes/workoutRouter.js';

//app
const app=express();

//db
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("db connected"))
.catch(err=>console.log("error!!", err.message))

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin:true, credentials:true}));

//routes
app.get("/", (req,res)=>res.json({message:"Welcome to the app"}));
app.use("/api/workout",router);

//listen
app.listen(process.env.PORT, ()=>console.log(`server running on ${process.env.PORT}`));