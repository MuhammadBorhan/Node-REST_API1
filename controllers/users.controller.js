const users=require("../models/users.model")

// Get All Users
const getAllUsers=(req,res)=>{
    res.status(200).json({users})
};

module.exports=getAllUsers;