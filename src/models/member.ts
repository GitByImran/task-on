import mongoose, { Schema, Document } from "mongoose";

export interface IMember extends Document {
  image: string;
  name: string;
  email: string;
  password: string;
  team: string;
  designation: string;
}

const MemberSchema: Schema = new Schema(
  {
    image: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    team: { type: String, required: true },
    designation: { type: String, required: true },
  },
  { timestamps: true }
);

const MemberModel =
  mongoose.models.Member || mongoose.model<IMember>("Member", MemberSchema);

export default MemberModel;
