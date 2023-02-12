import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import createError from "http-errors";
import Todo from "../../models/Todo";

export const validatorTodo = [
  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .custom(async (value) => {
      try {
        const data = await Todo.findOne({ title: new RegExp(value, "i") });
        if (data) {
          throw createError(400, "Title already exist!");
        }
      } catch (err) {
        throw createError(err as Error);
      }
    }),
];

export const validateTodo = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req).mapped();

  if (Object.keys(errors).length === 0) {
    return next();
  }

  throw createError(401, errors[Object.keys(errors)[0]].msg);
};
