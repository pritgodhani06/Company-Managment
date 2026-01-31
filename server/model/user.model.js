import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name:{
    type:String,
    require:true,
    unique:true
  }
},{
  timeStamp:true
});

const userModel = mongoose.model("users",userSchema);

export default userModel 