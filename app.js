const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

app.use("/users",usersRouter);

// get home route
app.get("/",(req,res)=>{
    res.send('Rest API is Running for CRUD Operations');
});

// route not found
app.use((req,res,next)=>{
    res.status(404).json({message:"Route Not Found"});
});

// server error
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something Broke"});
});


module.exports=app;