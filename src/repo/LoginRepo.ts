import prisma from "../services/prisma"

const LoginRepo = (data:any) =>
{
    const LoginDetails = prisma.user.findUnique({
        where:
        {
            email:data.email
        }
    })
    return LoginDetails

}
export default LoginRepo