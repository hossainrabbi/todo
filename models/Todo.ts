import { model, Schema } from "mongoose";

interface ITodo {
  title: string;
  status: "Pending" | "Done" | "Rejected";
}

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: [true, "Title must be unique"],
    },
    status: {
      type: String,
      enum: ["Pending", "Done", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Todo = model<ITodo>("Todo", todoSchema);
export default Todo;
