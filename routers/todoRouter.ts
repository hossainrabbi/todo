import express from "express";
import { allTodos, createTodo } from "../controllers/todoController";
import { validateTodo, validatorTodo } from "../errors/todo/validatorTodo";

const router = express.Router();

router.post("/todo", validatorTodo, validateTodo, createTodo);
router.get("/todos", allTodos);

export default router;
