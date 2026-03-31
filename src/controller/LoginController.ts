import LoginService from "../services/LoginServices"
import LoginRepo from "../repo/LoginRepo"
const LoginController = async(req:any,res:any)=>
{
    try{
  const data = req.body
    const LoginData = await LoginService(data)
    //console.log(LoginData)
   const LoginUser = await LoginRepo(data)
   //console.log(LoginUser)
   if(!LoginUser)
   {
    throw new Error("User Not Found")
   }
   
//    console.log(LoginUser)
  
   res.cookie("token", LoginData)
   //console.log(res.cookie)
    res.status(200).json({message:`Hello ${LoginUser.firstName}`,LoginData})
    }
    catch(err:any)
    {
        res.status(400).json({message:err.message})
    }
  
}

export default LoginController