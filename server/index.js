import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


import {getApiHealth} from './controllers/health.js'
import {postApiTransaction,getApiTransaction,postApiSignup, postApiLogin,deleteApiTransaction,updateApiTransaction,getApiUserTransaction, getApiTransactionById} from './controllers/transaction.js'

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

//post / transaction/
app.post('/api/transaction', postApiTransaction);

//get / transaction/
app.get('/api/transactions', getApiTransaction);

//post / signup/
app.post('/api/signup',postApiSignup)

//post /login/
app.post('/api/login',postApiLogin)

//delete / transaction/id
app.delete('/api/transaction/:id',deleteApiTransaction);

//put / transaction/id
app.put("/api/transaction/:id",updateApiTransaction);
    
//get /transaction/user/id
app.get('/api/transaction/user/:id',getApiUserTransaction)

//get /transaction /id
app.get('/api/transaction/:id',getApiTransactionById)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server runniong on port ${PORT}`)
});