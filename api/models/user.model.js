import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    avatar:{
        type:String,
        default:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3YxMTgxLXR1LWVsZW1lbnQtNDUxLW0zd3Q2NHd4LmpwZw.jpg"
    },
}, {timestamps:true});

const User =mongoose.model('User',userSchema);

export default User;