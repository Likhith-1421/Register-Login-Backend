import prisma from "../services/prisma"
import bcrypt from "bcrypt"


export const resetPasswords = async(user:any)=>
{
    const findUser = await prisma.user.findFirst({
        where:{
            email:user.email
        }
    })
    return findUser

}

export const resetPassword = async(data:any,user:any )=>
{
    const passwordHash = await bcrypt.hash(data.newPassword,10)
    //const passwordHashed = await bcrypt.hash(data.conformPassword,10)
    const users = await prisma.user.update({
        where:
        {
            id:user.id
        },
        data:
        {
            password:passwordHash ,
            conformPassword : data.conformPassword
        },
        select:
        {
            id:true,
            firstName:true,
            lastName:true,
            email:true,
           
            mobile:true,
            conformPassword:true
        }

    
    })
    
    return users

}