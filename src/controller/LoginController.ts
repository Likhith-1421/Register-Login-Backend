import LoginService from "../services/LoginServices"
import LoginRepo from "../repo/LoginRepo"
const LoginController = async(req:any,res:any)=>
{
    try{
  const data = req.body
    const LoginData = await LoginService(data)
   const LoginUser = await LoginRepo(data)
   if(!LoginUser)
   {
    throw new Error("User Not Found")
   }
   
   console.log(LoginUser)
   res.cookie(LoginData)
    res.status(200).json({message:`Hello ${LoginUser.firstName}`,LoginData})
    }
    catch(err:any)
    {
        res.status(400).json({message:err.message})
    }
  
}

export default LoginController