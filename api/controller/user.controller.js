import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const test =(req,res)=>{
    res.json({
        message: 'hiii'
    });
}
export const updateUser = async (req, res, next) => {
    try {
      // Check user authentication
      if (!req.user?.id || !req.params?.id) {
        return next(errorHandler(400, 'Invalid request parameters'));
      }
      if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'Unauthorized'));
      }
  
      // Hash password if provided
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      // Update the user
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
  
      if (!updatedUser) return next(errorHandler(404, 'User not found'));
  
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

  export const deleteUser = async (req,res,next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,'You can only delete your account'))
    try{
      await User.findByIdAndDelete(req.params.id);
      res.clearCookie('access_token');
      res.status(200).json('User has been deleted');
    }catch(error){
      next(error);
    }
  };
  