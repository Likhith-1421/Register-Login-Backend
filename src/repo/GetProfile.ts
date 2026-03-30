import prisma from "../services/prisma"


const FindUser = async(email:string)=>
{
    const user = await prisma.user.findFirst({
        where :
        {
            email : email
        }
    })
    
return user
}
export default FindUser