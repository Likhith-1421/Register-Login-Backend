import jwt from "jsonwebtoken"
import FindUser from "../repo/GetProfile"
const VerifyToken = async(req:any,res:any,next:any)=>
{
    const {token} =  req.cookies
   //console.log("Cookies:", req.cookies);
 // console.log("TOKEN:", token)
    if(!token)
    {
        throw new Error("Please Login First")
    }
    const Deobfuscation = Buffer.from(token,"base64").toString("utf8")
    console.log("Deobfuscation:",Deobfuscation)
    const verifytoken = await jwt.verify(Deobfuscation,"Likhith@14$27") as jwt.JwtPayload
   // console.log(verifytoken)

    const user = await FindUser(verifytoken.email)
   
//console.log("User :",user)
    if(!user)
    {
        throw new Error("user not found")
    }

    req.user = user
   //console.log("User:",user)
    next()

}
export default VerifyToken
