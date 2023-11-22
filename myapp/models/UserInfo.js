import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
    email: {type: String, required: true},
    streetAddress: {type: String},
    postalCode: {type: String},
    city: {type: String},
    country: {type: String},
    phone: {type: String},
    admin: {type: Boolean, default: false},
}, {timestamps: true})

export default mongoose?.models?.UserInfo || mongoose.model("UserInfo", UserInfoSchema)