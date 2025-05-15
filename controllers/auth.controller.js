let users =[]
export let currentUser = {
    id:null,
    email:null
}

export const signup=(req,res)=>{
    try {
        const {name,email,password,repeat_password} = req.body
        if(password !== repeat_password){
            return res.status(400).json({message:"Pasword must be same"})
        }
        const userExists = users.some(user=>user.email === email)
        if(userExists){
            return res.status(400).json({message:"User with this email already exists"})
        }
        let max = users.length > 0 ? Math.max(...users.map(user=>user.id)) :0

        const newUser = users.push({id:max+1,name,email,password})
        currentUser.id = max+1
        currentUser.email=email
        return res.status(200).json({message:"User signed up succesfullly",user:{id:max+1,name,email}})
    } catch (error) {
        res.status(500).json({message:"Intenal server error",error:error.message})
    }
}

export const login = (req,res)=>{
    try {
        const {email,password} = req.body

        const user = users.find(user=>user.email === email)
        if(!user){
            return res.status(400).json({message:"User with this mail does not exists"})
        }
        const isPasswordCorrect = user.password ==password
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Wrong password"})
        }
        currentUser.id = user.id
        currentUser.email = user.email
        return res.status(200).json({message:"User logged in successfully",currentUser})
    } catch (error) {
        res.status(500).json({message:"Intenal server error",error:error.message})
    }
}

export const logout =(req,res)=>{
    try {
        currentUser.id = null
        currentUser.email = null
        return res.status(200).json({message:"User logged out successfully"})
    } catch (error) {
        res.status(500).json({message:"Intenal server error",error:error.message})
    }
}