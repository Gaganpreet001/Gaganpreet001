require('dotenv').config();
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to home page</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})