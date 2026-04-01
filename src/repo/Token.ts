import prisma from "../services/prisma"

const Token = (Data:any)=>
{
      const token = prisma.user.findUnique({
        where :
        {
            id : Data.id
        }
      })
      return token
}
export default Token