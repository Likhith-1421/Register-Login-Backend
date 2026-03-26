import prisma from "../services/prisma"
import bcrypt from "bcrypt"


export const forgotPassword = async(data:any)=>
{
    const findUser = await prisma.user.findUnique({
        where:{
            email:data.email
        }
    })
    return findUser

}

export const resetPassword = async(data:any)=>
{
    const passwordHash = await bcrypt.hash(data.newPassword,10)
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