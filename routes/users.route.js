const router=require("express").Router();
const {getAllUsers,saveUsers, updateUser, deleteUser, getRandomUsers} = require("../controllers/users.controller");

router.get("/random",getRandomUsers);
router.get("/all",getAllUsers);
router.post("/save",saveUsers);
router.patch("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);



module.exports=router;