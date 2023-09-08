const express=require("express")
const cors=require("cors")
const connecttoDb=require("./config/connecttodb.js")
const app=express()
//express middleware

app.use(express.json()) //json data ko allow karega
app.use(express.urlencoded({extended:true}))
app.use(cors())
connecttoDb();

const userroute=require("./routes/userroute.js")
app.use("/",userroute)
module.exports= app;
