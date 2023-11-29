import express from 'express'
import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () =>{
const conn = await mongoose.connect(process.env.MONGODB_URI)
if(conn){
    console.log('MongoDB Connected');
}
};
connectDB();

app.get('/health', async (req, res) =>{
    res.json({
        success:true,
        message:"Server is running"
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server runniong on port ${PORT}`)
});