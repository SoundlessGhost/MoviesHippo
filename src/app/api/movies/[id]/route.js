import ConnectDB from "@/lib/ConnectDB";
import { Movies } from "@/models/Movies";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await ConnectDB();

    const { id } = params;
    const {
      MoviesName,
      MoviesTitle,
      AvailableAudio,
      ReleaseDate,
      Description,
      MoviesTrailer,
      Download,
      Slider,
      MainMovies,
      Runtime,
      Active,
    } = await request.json();
    const updateMovie = await Movies.findByIdAndUpdate(id, {
      MoviesName,
      MoviesTitle,
      AvailableAudio,
      ReleaseDate,
      Description,
      MoviesTrailer,
      Download,
      Slider,
      MainMovies,
      Runtime,
      Active,
    });

    return new NextResponse(JSON.stringify(updateMovie), { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "failed to update movie" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await ConnectDB();

    const { id } = params;
    const getSingleMovie = await Movies.findOne({ _id: id });
    return new NextResponse(JSON.stringify(getSingleMovie), { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "failed to get single movie" },
      { status: 500 }
    );
  }
}
