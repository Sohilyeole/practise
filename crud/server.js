const app=require("./app.js")
require('dotenv').config();
const port= parseInt(process.env.PORT)///agar env se port mila to wo lw nahito 5000 le


app.listen( port,()=>{
    console.log(`localhost:${port}`)
})