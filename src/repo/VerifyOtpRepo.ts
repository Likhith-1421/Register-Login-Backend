import prisma from "../services/prisma"

export const VerifyOtpRepo =async(Data:any)=>
{
    
     const FindOtp = await prisma.user.findUnique({
         where :
         {
             email:Data.email
           
         }
     })
     console.log(FindOtp)
     return FindOtp
}

