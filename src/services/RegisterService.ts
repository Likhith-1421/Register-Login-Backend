import { FindUser } from "../repo/RegisterRepo"
import { RegisterRepo } from "../repo/RegisterRepo"

const RegisterService = async(data:any) =>
{
  const {firstName,lastName,email,password,mobile} = data

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
    mobile
  })
console.log(SaveData)

  
return SaveData

      
}
export default RegisterService