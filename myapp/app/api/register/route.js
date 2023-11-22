

import bcrypt from "bcrypt";
import User from "@/models/User";
import mongoose from "mongoose";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    try {
        const {name, email, image, password: pass} = await req.json()

        const isExisting = await User.findOne({email})

        if(isExisting){
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({name, email, image, password: hashedPassword})

        const {password, ...user} = newUser._doc

        return new Response(JSON.stringify(user), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}