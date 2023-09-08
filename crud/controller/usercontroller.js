const User=require("../model/usermodel")
exports.home = (req, res) => {
    res.send("<h1>hello world</h1>");
  };
exports.register= async (req,res)=>{
  try {
    const { email, password } = req.body;
    const userexist = await User.findOne({ email: email });
    if(!email  || !password){
     throw new Error("name and email are require")
    }
    else if(userexist){
      throw new Error("user already exist try login ")
    }
    else{
      const user=await User.create({
        email,
        password
      })
      res.status(201).json({
        success:true,
        message:"user register sucessfully"
      }

      )
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
    
}
exports.login=async (req,res)=>{
  try {
    const {email ,password}=req.body
    const userexist = await User.findOne({ email: email });
    if(!userexist){
      throw new Error("kindly register first")
    }
    else{
      const check=userexist.password
      if(check==password){
        res.status(201).json({
          success:true,
          message:"login sucessful"
        })
      }
      else{
        res.status(401).json({
          success:false,
          message:"try another password"
        })
      }
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}