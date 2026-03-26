import prisma from "../services/prisma"
import bcrypt from "bcrypt"


export const RegisterRepo = async(data:any) =>
{
    const passwordHash = await bcrypt.hash(data.password,10)
    const Register =  await prisma.user.create({
        data:
        {
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:passwordHash,
            mobile:data.mobile,
            conformPassword:data.conformPassword
        
        }
    })
    return Register

}

export const FindUser = (email:string, mobile:string)=>
{
    const FindUser = prisma.user.findUnique({
        where:{
            email:email,
            mobile : mobile
        }
    })
    return FindUser

}