import cors from "cors";
import express from "express";
import { errorHandler, notFoundSHandler } from "./errors/error";
import todoRouter from "./routers/todoRouter";

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use("/api/v1", todoRouter);

// error handler
app.use(notFoundSHandler);
app.use(errorHandler);

export default app;
