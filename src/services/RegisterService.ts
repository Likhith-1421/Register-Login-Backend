import { FindUser } from "../repo/RegisterRepo"
import { RegisterRepo } from "../repo/RegisterRepo"

const RegisterService = async(data:any) =>
{
  const {firstName,lastName,email,password,mobile,conformPassword} = data

 const DataUser =  await FindUser(email,mobile)
  

  if(DataUser?.email && DataUser.mobile)
  {
    throw new Error("User Already Exist")
  }

 

  const SaveData = await RegisterRepo({
    firstName,
    lastName,
    email,
    password,
    mobile,
    conformPassword
  })
console.log(SaveData)

if(password !== conformPassword)
{
  throw new Error("Password doesn't matched")
}
  
return SaveData

      
}
export default RegisterService