import express from "express"
import { getTasks,deleteTask,updateTask,addTask,getTaskById } from "../controllers/task.controller.js"
import {validateTask} from "../middlewares/task.validation.js"
export const taskRouter = express.Router()
import { checkAuth } from "../middlewares/auth.js"

taskRouter.get("",getTasks)

taskRouter.get("/:id",getTaskById)

taskRouter.post("",validateTask,checkAuth,addTask)

taskRouter.delete("/:id",checkAuth,deleteTask)

taskRouter.put("/:id",validateTask,checkAuth,updateTask)

