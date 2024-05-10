import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  image: string;
  title: string;
  brief: string;
  deadline: string;
  teams: string[];
}

const TaskSchema: Schema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    brief: { type: String, required: true },
    deadline: { type: String, required: true },
    teams: { type: [String] },
  },
  { timestamps: true }
);

const TaskModel =
  mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);

export default TaskModel;
