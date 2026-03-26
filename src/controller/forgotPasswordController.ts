
import forgotPasswordService from "../services/forgotPasswordService"

const forgotPasswordController = async(req:any,res:any)=>
{
    try{
          const data = req.body
          const forgotPassword = await forgotPasswordService(data)
          console.log(forgotPassword)
          res.status(200).json({message:"Password Updated successfully", forgotPassword})
    }
    catch(err:any)
    {
         res.status(400).json({message:err.message})
    
    }
}
export default forgotPasswordController