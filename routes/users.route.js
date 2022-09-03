const router=require("express").Router();
const {getAllUsers,saveUsers, updateUser, deleteUser} = require("../controllers/users.controller");

router.get("/all",getAllUsers);
router.post("/save",saveUsers);
router.patch("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);



module.exports=router;