import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    }
})

export default mongoose.model("User", userSchema)