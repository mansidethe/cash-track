import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import { responder } from "../util.js";

const postApiTransaction = async (req, res) => {

    const { amount, type, category, description, user} = req.body;

    const transaction = new Transaction({
        user,
        amount,
        type,
        category,
        description
    });

    try {
        const savedTransaction = await transaction.save();

        return responder({
            res,
            success: true,
            message: 'Transaction saved',
            data: savedTransaction
        })
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
    }
}


const getApiTransaction = async (req, res) => {

    const allTransaction = await Transaction.find();

    return responder({
        res,
        success: true,
        message: "Successfully fetched all transaction",
        data: allTransaction
    })
}


const postApiSignup = async (req, res) => {
    const { name,
        email,
        password,
        mobile,
        address,
        gender } = req.body

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender
    });
    try {
        const savedUser = await user.save();
        return responder({
            res,
            success: true,
            message: 'Signup Successfully',
            data: savedUser
        })
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
    }
}

const postApiLogin = async (req, res) => {
    const { email, password } = req.body;

    // const user = await User.findeOne({})

    if (!email || !password) {
        return responder({
            res,
            success: false,
            message: "Please provide email and password"
        })
    }
    const user = await User.findOne({
        email: email,
        password: password
    })

    if (user) {
        return responder({
            res,
            success: true,
            data: user,
            message: "Login successfully"
        });
    }
    else {
        return responder({
            res,
            success: false,
            message: "Invalid credentials"
        })
    }
}

const deleteApiTransaction = async (req, res) => {

    const { id } = req.params;
    await Transaction.deleteOne({ _id: id });
    return responder({
        res,
        success: true,
        message: "product deleted successfully"
    });
}

const updateApiTransaction = async (req, res) => {

    const { id } = req.params;

    const { amount, type, category, description } = req.body;

    await Transaction.updateOne({ _id: id }, {
        $set: {
            amount: amount,
            type: type,
            category: category,
            description: description
        }
    });
    const updatedTransaction = await Transaction.findById({ _id: id });

    return responder({
        res,
        success: true,
        data: updatedTransaction,
        message: "Transaction updated successfully"
    });

}

const getApiUserTransaction = async(req, res) => {

    try{
        const {id} = req.params;
        const findUserTransaction = await Transaction.find({user:id}).populate('user')
    
        findUserTransaction.forEach((singleTransaction)=>{
            singleTransaction.user.password=undefined;
        })
       responder({
            res,
            success:true,
            data:findUserTransaction,
            message:"Fetched user data"
        })
    }
    catch(err){
        return responder({
            res,
            success:false,
            message:err.message
        })
    }
    }

const getApiTransactionById = async(req,res)=>{
    const {id} = req.params;

const transaction = await Transaction.findOne({_id: id});
 return responder({
    res,
    success:true,
    data:transaction,
    message:"Transaction fetched successfully"
 });
}

export { postApiTransaction, getApiTransaction, postApiSignup, postApiLogin, deleteApiTransaction, updateApiTransaction, getApiTransactionById,getApiUserTransaction};