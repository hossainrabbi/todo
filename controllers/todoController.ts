import { NextFunction, Request, Response } from "express";
import Todo from "../models/Todo";

// create a new todo
const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let todo = new Todo(req.body);
    todo = await todo.save();

    res.status(201).json({
      status: "success",
      todo,
    });
  } catch (err) {
    next(err);
  }
};

// get all todos
const allTodos = async (req: Request, res: Response, next: NextFunction) => {
  const { searchKeyword = "", status = "" } = req.query;
  try {
    const todos = await Todo.find({
      $or: [{ title: { $regex: searchKeyword, $options: "i" } }],
    });

    res.status(200).json({
      status: "success",
      todos,
    });
  } catch (err) {
    next(err);
  }
};

export { createTodo, allTodos };
