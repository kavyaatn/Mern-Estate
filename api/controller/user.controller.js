import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const test =(req,res)=>{
    res.json({
        message: 'hiii'
    });
}
export const UpdateUser = async(req,res,next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,'cannot update'))
    try{
    if(req.body.password){
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }
    const UpdateUser = await User.findByIDAndUpdate(req.params.id,{
        $set:{
            username: req.body.username,
            email: req.body.email,
            password:req.body.password,
            avatar: req.body.avatar
        }
    },{new:true})
    const {password, ...rest} =UpdateUser._doc;
    res.status(200).json(rest)
}catch(error){
    next(error)
}
};