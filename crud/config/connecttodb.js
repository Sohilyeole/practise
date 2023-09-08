const mongoose =require("mongoose")
const connecttoDb = async() =>{

 
    mongoose.connect("mongodb+srv://sohil_pw:*********@cluster0.y73lfq1.mongodb.net/sigma")
        .then((conn)=>{
        console.log(`conncted to db ${conn.connection.host}`)

    })
    .catch((err)=>{
        console.log(err.message)
        process.exit(1)
    })
}
module.exports=connecttoDb