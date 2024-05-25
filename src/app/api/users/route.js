import ConnectDB from "@/lib/ConnectDB";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();

    const getUser = await User.find();
    return new NextResponse(JSON.stringify(getUser), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to get user", { status: 500 });
  }
}

export async function POST(request) {
  try {
    await ConnectDB();

    const body = await request.json();
    const createdUser = User.create(body);
    return new NextResponse(JSON.stringify(createdUser), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to create user", { status: 500 });
  }
}
