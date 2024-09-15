import { Router } from "express";
import { createTodo } from "../controllers/todo";

const todoRouter = Router()

todoRouter.post("/", createTodo)

// app.use("/todo", todoRouter)

export default todoRouter