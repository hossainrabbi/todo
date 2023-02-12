import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import createError from "http-errors";

// default not found handler
const notFoundSHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(createError(404, "Your requested content was not found!"));
};

// global error handler
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err?.status || 500).json({
    success: "fail",
    message: err?.message || "Error Occurred",
  });
};

export { notFoundSHandler, errorHandler };
