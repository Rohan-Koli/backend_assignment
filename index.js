import express from "express"
import { taskRouter } from "./routes/task.route.js"
import { authRouter } from "./routes/auth.route.js"

const PORT = 8000
const app = express()

app.use(express.json())
app.use("/tasks",taskRouter)
app.use("/auth",authRouter)

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))