const router=require("express").Router();
const getAllUsers = require("../controllers/users.controller");

router.get("/all",getAllUsers);


module.exports=router;