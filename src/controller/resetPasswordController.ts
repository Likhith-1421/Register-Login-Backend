
import resetPasswordService from "../services/resetPasswordService"

const resetPasswordController = async(req:any,res:any)=>
{
    try{
          const data = req.body
          const user =   req.user
          console.log(user)
          const forgotPassword = await resetPasswordService(data,user)
          console.log(forgotPassword)
          res.status(200).json({message:"Password Updated successfully", forgotPassword})
    }
    catch(err:any)
    {
         res.status(400).json({message:err.message})
    
    }
}
export default resetPasswordController