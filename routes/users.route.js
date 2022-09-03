const router=require("express").Router();
const {getAllUsers,saveUsers} = require("../controllers/users.controller");

router.get("/all",getAllUsers);
router.post("/save",saveUsers);



module.exports=router;