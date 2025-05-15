import { currentUser } from "../controllers/auth.controller.js"

export const checkAuth =(req,res,next)=>{
  try {
    if(currentUser.id === null){
      return res.status(400).json({message:"Loggin required"})
    }
    next()
  } catch (error) {
    return res.status(500).json({message:"Internal serer error"})
  }
}