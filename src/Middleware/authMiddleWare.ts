import jwt from "jsonwebtoken"
import FindUser from "../repo/GetProfile"
const VerifyToken = async(req:any,res:any,next:any)=>
{
    const {token} =  req.cookies
   
  console.log("TOKEN:", token)
    if(!token)
    {
        throw new Error("Please Login First")
    }
    const verifytoken = await jwt.verify(token,"Likhith@14$27") as jwt.JwtPayload
    console.log(verifytoken)

    const user = await FindUser(verifytoken.email)
   
console.log(user)
    if(!user)
    {
        throw new Error("user not found")
    }

    req.user = user
   // console.log(user)
    next()

}
export default VerifyToken
