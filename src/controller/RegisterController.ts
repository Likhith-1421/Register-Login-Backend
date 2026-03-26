import RegisterService from "../services/RegisterService"
import RegisterSchema from "../../validators/signupVlidation"


const RegisterController = async(req:any,res:any)=>
{
    try{

        
           const data = req.body
           const Validation = RegisterSchema.safeParse(data)
           if(!Validation.success)
           {
            Validation.error.issues.map((err)=>err.message)
           }
   const RegisterData = await RegisterService(data)
   res.status(200).json({message:"Register Successfully", RegisterData})
    }
    catch(err:any)
    {
       res.status(400).json({message:err.message})
    }
  

}

export default RegisterController