let tasks = []

export const getTasks = (req,res)=>{
    try {
        const id = parseInt(req.params.id)
        return res.status(200).json({message:"tasks fetched successfully", tasks})
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error:error.message})
    }
}

export const getTaskById = (req,res)=>{
    try {
        const id = parseInt(req.params.id)
        const taskExists = tasks.some(task => task.id ===id)
        if(!taskExists){
            return res.status(404).json({message:`task with id ${id} not found`})
        }
        const task = tasks.find(task=>task.id ===id)
        return res.status(200).json({message:'task fetched',task})
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error:error.message})
    }
}

export const addTask = (req,res)=>{
    try {
        const {title,description} = req.body
        let max = tasks.length > 0 ? Math.max(...tasks.map(task=>task.id)) : 0
        const newTask = {id:max+1,title,description}
        tasks.push(newTask)
        return res.status(200).json({message:"task added successfully", newTask})
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error:error.message})
    }
}

export const deleteTask = (req,res)=>{
    try {
        const id = parseInt(req.params.id)
        const taskExists = tasks.some(task=>task.id === id)
        if(!taskExists){
            return res.status(404).json({message:`Task with id ${id} not found`})
        }
        tasks = tasks.filter(task=>task.id !== id)
        res.status(200).json({message:`task with id ${id} deleted`})
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error:error.message})
    }
}

export const updateTask = (req,res)=>{
    try {
        const id = parseInt(req.params.id)
        const taskExists = tasks.some(task=>task.id === id)
        if(!taskExists){
            return res.status(404).json({message:`task with id ${id} does not extsts`})
        }
        const {title,description} = req.body
        tasks = tasks.map(task=>{
            if (task.id === id) {
                return { ...task, title, description }
            }
            return task
        })
        const task = tasks.find(task =>task.id === id)
        res.status(200).json({message:`Task with id ${id} updated`,task})
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error:error.message})
    }
}