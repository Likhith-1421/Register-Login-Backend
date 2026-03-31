import jwt from "jsonwebtoken"
import LoginRepo from "../repo/LoginRepo"
import bcrypt from "bcrypt"



const LoginServices = async (data: any) => {
    const LoginUser = await LoginRepo(data)

    if (!LoginUser) {
        throw new Error("User Not Found")
    }

    const token = jwt.sign({ email: LoginUser.email }, "Likhith@14$27")
//console.log(token)
    const PasswordCompare = await bcrypt.compare(data.password, LoginUser.password)

    if (!PasswordCompare) {
        throw new Error("Invalid Password")
    }
    return token




}
export default LoginServices