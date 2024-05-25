"use client";
import LatestMovies from "@/components/LatestMovies";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { CirclePlay, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "@/components/Links";

const SingleMoviePage = ({ params }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${params.id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params.id]);

  return (
    <MaxWidthWrapper>
      <div className="lg:grid grid-cols-[9fr,3fr]">
        {movie && (
          <div>
            {showVideo && (
              <div className="pt-10">
                {showVideo && (
                  <X
                    size={20}
                    onClick={() => setShowVideo(false)}
                    className="cursor-pointer"
                  />
                )}
                {showVideo && (
                  <div>
                    <iframe
                      className="lg:w-[540px] lg:h-[315px] w-[400px] h-[250px]"
                      src={movie.MoviesTrailer}
                      title="YouTube Video"
                      frameborder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center">
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src={movie.MoviesTitle}
                  alt="Movie title"
                  // placeholder={blur}
                  className={`mb-4 pt-10 lg:w-[250px] lg:h-[350px] md:w-[200px] md:h-[250px] w-[200px] h-[250px]`}
                />
              </div>

              <div className="ml-4 mt-10 lg:mt-0 w-[400px]">
                <p className="lg:text-4xl text-2xl">
                  {movie.MoviesName} <span>{movie.AvailableAudio}</span>
                </p>

                <div className="flex items-center lg:text-[15px] text-[12px]">
                  <h4 className="my-2">
                    Release Date:{" "}
                    <span className="text-gray-400">{movie.ReleaseDate}</span>
                  </h4>
                  <h4 className="my-2 ml-4">
                    Runtime:{" "}
                    <span className="text-gray-400">{movie.Runtime}</span>
                  </h4>
                </div>

                <div className="mt-6 flex items-center">
                  <Link
                    href={movie.Download}
                    target="_blank"
                    className={`${buttonVariants()} font text-[14px]`}
                  >
                    Download &rarr;
                  </Link>
                  <Button
                    variant="ghost"
                    className="font ml-4 text-[14px]"
                    onClick={() => setShowVideo(true)}
                  >
                    <CirclePlay className="mr-1" /> Watch Trailer &rarr;
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <p className="my-4 text-2xl font italic">Description &rarr;</p>
              <p className="lg:text-[16px] mb-6 pr-2 font text-sm">
                {movie.Description}
              </p>
            </div>

            <div className="lg:flex">
              <Image
                width={300}
                height={70}
                src={movie.MainMovies}
                alt="background img"
                className=" rounded-md w-[350px]"
              />

              <Image
                width={300}
                height={70}
                src={movie.Slider}
                alt="background img"
                className=" rounded-md w-[350px]  lg:ml-10 mt-10 lg:mt-0"
              />
            </div>

            <Links />
          </div>
        )}

        <LatestMovies />
      </div>
    </MaxWidthWrapper>
  );
};

export default SingleMoviePage;
