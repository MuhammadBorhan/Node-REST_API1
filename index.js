const app=require("./app");
PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});