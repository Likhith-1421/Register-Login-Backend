import prisma from "../services/prisma"

export const LoginWithOtpRepo = async(Data:any)=>
{
 const otp = Math.floor(1000 + Math.random() * 9000)
    const update =await prisma.user.update({
        where:
        {
            email:Data.email
        },
        data:
        {
            otp : otp,
            otpExpiry : new Date(Date.now() + 60 * 1000)
        }
    })
    return update
}



export const findUser = async(Data:any)=>
{
    const user = await prisma.user.findUnique({
        where:
        {
            email:Data.email
        }
    })
    return user

}

