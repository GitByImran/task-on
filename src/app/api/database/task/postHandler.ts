import TaskModel from "@/models/task";
import Connect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest, response: NextResponse) => {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  await Connect();

  try {
    const requestData = await request.json();

    if (!requestData || typeof requestData !== "object") {
      throw new Error("Invalid request body");
    }

    console.log(requestData);

    const newTask = new TaskModel(requestData);
    const savedTask = await newTask.save();

    return NextResponse.json({ success: true, data: savedTask });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
