import { Schema, model } from "mongoose";

const userSignupSchema = new Schema({
    name: {
        type: String,
        default: "-"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
        default: "Prefer not to say"
    },

})

const User = model('User', userSignupSchema);

export default User;