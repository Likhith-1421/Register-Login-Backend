import prisma from "../services/prisma"
import bcrypt from "bcrypt"


// export const resetPasswords = async(data:any)=>
// {
//     const findUser = await prisma.user.findFirst({
//         where:{
//             otp:data.otp
//         }
//     })
//     return findUser

// }

export const resetPassword = async(data:any)=>
{
    const passwordHash = await bcrypt.hash(data.newPassword,10)
    //const passwordHashed = await bcrypt.hash(data.conformPassword,10)
    const user = await prisma.user.update({
        where:
        {
            email:data.email
        },
        data:
        {
            password:passwordHash 
         
           
        }
    
    })
    
    return user

}