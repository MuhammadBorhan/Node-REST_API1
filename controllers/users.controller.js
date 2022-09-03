let users=require("../models/users.model")
const {v4:uuidv4}=require("uuid");

// Get All Users
const getAllUsers=(req,res)=>{     
    res.status(200).json({users})
};

// Save New User
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

// Update User
const updateUser=(req,res)=>{   
   const userId=req.params.id; 
   const {gender,name,contact,address,photoUrl}=req.body;
   users.filter((user)=>user.id===userId).map(
    (selectUser)=>{
        selectUser.gender=gender;
        selectUser.name=name;
        selectUser.contact=contact;
        selectUser.address=address;
        selectUser.photoUrl=photoUrl;
    })
    res.status(200).json(users)
};

// Delete User
const deleteUser=(req,res)=>{   
    const userId=req.params.id;
    users=users.filter(user=>user.id!==userId);
    res.status(200).json(users)
};

module.exports={getAllUsers,saveUsers,updateUser,deleteUser};