import mongoose from "mongoose";
import Error from "next/error";

const Connect = async () => {
  try {
    await mongoose
      .connect(process.env.NEXT_PUBLIC_DB_URL || "task-on")
      .then(() => console.log("connected"));
  } catch (error) {
    console.log("Unable to connect!", error);
  }
};

export default Connect;
