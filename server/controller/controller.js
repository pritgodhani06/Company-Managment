import userModel from "../model/user.model.js"
import ApplicationError from "../utils/ApplicationError.js";


export const getUserController = async(req,res)=>{
  try {
    const data =await userModel.find();
    
    res.status(200).json({
      success:true,
      mes:"All User Get successfully",
      data:data
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      mes:"Get User Error",
      error:error
    })
  }
}
export const createUserController = async(req,res)=>{
  try {
    const data =await userModel.create(req.body);
    
    res.status(200).json({
      success:true,
      mes:"All User Get successfully",
      data:data
    })
  } catch (error) {
    throw new ApplicationError("Create user Error",{originalError:error})
  }
}