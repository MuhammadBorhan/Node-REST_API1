const router=require("express").Router();
const {getAllUsers,saveUsers, updateUser} = require("../controllers/users.controller");

router.get("/all",getAllUsers);
router.post("/save",saveUsers);
router.patch("/update/:id",updateUser);



module.exports=router;