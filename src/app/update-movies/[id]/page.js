"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdatePage = ({ params }) => {
  const router = useRouter();
  
  const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
    } = data;

    const updateMovies = {
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
    };

    fetch(`http://localhost:3000/api/movies/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateMovies),
    })
      .then((res) => res.json())
      .then(() => {
        toast("movies update successfully");
        router.push("/");
      })
      .catch((err) => {
        toast(err);
      });
  };

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${params.id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params.id]);

  return (
    <div className="">
      <MaxWidthWrapper>
        <h1 className="text-center pb-4 font text-2xl pt-10">
          &darr; Update Your Movie &darr;
        </h1>

        <div className="font pb-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <Label htmlFor="MoviesTitle">Thumbnail !mg</Label>
              <Input
                {...register("MoviesTitle", { required: true })}
                className="mt-2 "
                placeholder="Thumbnail"
                defaultValue={movie && movie.MoviesTitle}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesTitle?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MainMovies">Background !mg</Label>
              <Input
                {...register("MainMovies", { required: true })}
                className="mt-2"
                placeholder="MainMovies img url"
                defaultValue={movie && movie.MainMovies}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MainMovies?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MoviesName">MoviesName</Label>
              <Input
                {...register("MoviesName", { required: true })}
                className="mt-2"
                placeholder="MoviesName"
                defaultValue={movie && movie.MoviesName}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesName?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Description">Description</Label>
              <Input
                {...register("Description", { required: true })}
                className="mt-2"
                placeholder="Description"
                defaultValue={movie && movie.Description}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Description?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="AvailableAudio">AvailableAudio</Label>
              <Input
                {...register("AvailableAudio", { required: true })}
                className="mt-2"
                placeholder="AvailableAudio"
                defaultValue={movie && movie.AvailableAudio}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.AvailableAudio?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="ReleaseDate">ReleaseDate</Label>
              <Input
                {...register("ReleaseDate", { required: true })}
                className="mt-2"
                placeholder="ReleaseDate"
                defaultValue={movie && movie.ReleaseDate}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.ReleaseDate?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Runtime">Runtime</Label>
              <Input
                {...register("Runtime", { required: true })}
                className="mt-2"
                placeholder="Runtime"
                defaultValue={movie && movie.Runtime}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Runtime?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MoviesTrailer">MoviesTrailer url</Label>
              <Input
                {...register("MoviesTrailer", { required: true })}
                className="mt-2"
                placeholder="MoviesTrailer url"
                defaultValue={movie && movie.MoviesTrailer}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesTrailer?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Download">Download url</Label>
              <Input
                {...register("Download", { required: true })}
                className="mt-2"
                placeholder="Download url"
                defaultValue={movie && movie.Download}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Download?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Slider">Slider img url</Label>
              <Input
                {...register("Slider", { required: true })}
                className="mt-2"
                placeholder="Slider img url"
                defaultValue={movie && movie.Slider}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Slider?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Active">Active</Label>
              <Input
                {...register("Active", { required: true })}
                className="mt-2"
                placeholder="Active"
                defaultValue={movie && movie.Active}
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Active?.message}
              </p>
            </div>

            <Button className="w-full mt-6 font">Update</Button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default UpdatePage;
// defaultValue={movie && movie.AvailableAudio}
