import ConnectDB from "@/lib/ConnectDB";
import { Movies } from "@/models/Movies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();

    const getMovie = await Movies.find();
    return new NextResponse(JSON.stringify(getMovie), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to get movie", { status: 500 });
  }
}

export async function POST(request) {
  try {
    await ConnectDB();

    const body = await request.json();
    const createMovie = Movies.create(body);
    return new NextResponse(JSON.stringify(createMovie), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to create movie", { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await ConnectDB();

    const id = request.nextUrl.searchParams.get("id");
    const deleteMovie = await Movies.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify(deleteMovie), { status: 200 });
  } catch (error) {
    return new NextResponse("failed to delete movie", { status: 500 });
  }
}

// `http://localhost:3000/api/movies?id=${id}` delete
