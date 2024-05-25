"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddMoviePage = () => {

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

    const createdMovies = {
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

    fetch("http://localhost:3000/api/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdMovies),
    })
      .then((res) => res.json())
      .then(() => {
        toast("Movies added successfully ");
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-center pt-10 pb-4 font text-2xl text-zinc-600">
          &darr; Add Your Movie &darr;
        </h1>

        <div className="font pb-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <Label htmlFor="MoviesTitle">Thumbnail !mg</Label>
              <Input
                {...register("MoviesTitle", { required: true })}
                className="mt-2 "
                placeholder="Thumbnail"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesTitle?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MainMovies">Background !mg</Label>
              <Input
                {...register("MainMovies", { required: true })}
                className="mt-2 "
                placeholder="MainMovies img url"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MainMovies?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MoviesName">MoviesName</Label>
              <Input
                {...register("MoviesName", { required: true })}
                className="mt-2 "
                placeholder="MoviesName"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesName?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Description">Description</Label>
              <Input
                {...register("Description", { required: true })}
                className="mt-2 "
                placeholder="Description"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Description?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="AvailableAudio">AvailableAudio</Label>
              <Input
                {...register("AvailableAudio", { required: true })}
                className="mt-2 "
                placeholder="AvailableAudio"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.AvailableAudio?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="ReleaseDate">ReleaseDate</Label>
              <Input
                {...register("ReleaseDate", { required: true })}
                className="mt-2 "
                placeholder="ReleaseDate"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.ReleaseDate?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Runtime">Runtime</Label>
              <Input
                {...register("Runtime", { required: true })}
                className="mt-2 "
                placeholder="Runtime"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Runtime?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="MoviesTrailer">MoviesTrailer url</Label>
              <Input
                {...register("MoviesTrailer", { required: true })}
                className="mt-2 "
                placeholder="MoviesTrailer url"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.MoviesTrailer?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Download">Download url</Label>
              <Input
                {...register("Download", { required: true })}
                className="mt-2 "
                placeholder="Download url"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Download?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Slider">Slider img url</Label>
              <Input
                {...register("Slider", { required: true })}
                className="mt-2 "
                placeholder="Slider img url"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Slider?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="Active">Active</Label>
              <Input
                {...register("Active", { required: true })}
                className="mt-2 "
                placeholder="Active"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.Active?.message}
              </p>
            </div>

            <Button className="w-full mt-6 font">Continue to add</Button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AddMoviePage;
