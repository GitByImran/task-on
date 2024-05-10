import MemberModel from "@/models/member";
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

    const newMember = new MemberModel(requestData);
    const savedMember = await newMember.save();

    return NextResponse.json({ success: true, data: savedMember });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
