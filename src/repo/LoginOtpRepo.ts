import prisma from "../services/prisma"

export const LoginOtpRepo = (Data:any)=>
{
    const otp = Math.floor(1000 + Math.random() * 9000)
    const {email} = Data
    const LoginOtp = prisma.user.update({
        where : 
        {
            email:email
        },
        data : 
        {
            otp : otp
        }
    })
    return LoginOtp
}


export const FindUser = async(Data:any)=>
{
   const {email} = Data
    const FindUsers =await prisma.user.findUnique({
        where : 
        {
            email:email
        }
    })
    console.log(FindUsers)
   return FindUsers
}

