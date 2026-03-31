import authMiddleWare from "../Middleware/authMiddleWare"

const GetProfileController = async(req:any,res:any)=>
{
    try{
      // const user = req.user
      // console.log(user)

          const Data  = req.user 
       // console.log(Data)
          res.send(Data)
    }
    catch(err:any)
    {
         res.status(400).json({message:err.message})
    }
}
export default GetProfileController