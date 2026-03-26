import {z} from "zod"

const RegisterSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,"Password must contsin lowercase,uppercase,number and special characters"),
 
    firstName : z.string().min(3,),
    lastName : z.string().min(3),
    mobile : z.string().min(10)
   
})
export default RegisterSchema