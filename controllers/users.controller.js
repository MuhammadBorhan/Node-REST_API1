let users=require("../models/users.model")
const {v4:uuidv4}=require("uuid");

// Get All Users
const getAllUsers=(req,res)=>{     
    res.status(200).json({users})
};

// Get All Users
const saveUsers=(req,res)=>{   
   const newUser={
    id:uuidv4(),
    gender:req.body.gender,
    name:req.body.name, 
    contact:req.body.contact, 
    address:req.body.address, 
    photoUrl:req.body.photoUrl 
   };
   users.push(newUser)  
    res.status(201).json({users})
};

module.exports={getAllUsers,saveUsers};