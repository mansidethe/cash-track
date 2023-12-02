import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


import {getApiHealth} from './controllers/health.js'
import {postApiTransaction,getApiTransaction,postApiSignup, postApiLogin} from './controllers/transaction.js'

const app = express();
app.use(express.json());

const connectDB = async () => {
    // try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('MongoDB Connected...');
    }
    // }
    // catch(e){
    //     console.log(e.message);
    // }
};
connectDB();

app.get('/api/health',getApiHealth);

app.post('/api/transaction', postApiTransaction);

app.get('/api/transactions', getApiTransaction);

//post / signup
app.post('/api/signup',postApiSignup)

//post /login
app.post('/api/login',postApiLogin)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server runniong on port ${PORT}`)
});