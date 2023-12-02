import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import { responder } from "../util.js";

const postApiTransaction = async (req, res) => {

    const { amount, type, category, description } = req.body;

    const transaction = new Transaction({
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

const postApiLogin = async (req,res)=>{
    const {email,password} = req.body;

    // const user = await User.findeOne({})

    if(!email || !password){
        return responder({
            res,
            success:false,
            message:"Please provide email and password"
        })
    }
    const user = await User.findOne({
        email:email,
        password:password
    })

    if(user){
        return responder({
            res,
            success:true,
            data:user,
            message:"Login successfully"
        });
    }
    else{
        return responder({
            res,
            success:false,
            message:"Invalid credentials"
        })
    }
}

export { postApiTransaction, getApiTransaction, postApiSignup, postApiLogin };