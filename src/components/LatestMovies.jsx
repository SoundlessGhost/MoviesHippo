"use client";
import { getMovies } from "@/lib/getMovies";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="lg:border-0 mt-4 lg:border-l-2 border-0 border-t-2 pl-10">
        {movies.slice(0, 5).map((movie, i) => (
          <div key={i}>
            <div className="flex items-center">
              <Image
                width={70}
                height={70}
                src={movie.MoviesTitle}
                alt="Movie title"
                className="mb-2 mt-4 rounded-md"
              />
              <div className="ml-2">
                <Link href={`/single-movie/${movie._id}`}>
                  <p className="lg:text-[12px] md:text-[12px] text-[10px] ">
                    {movie.MoviesName} <span>{movie.AvailableAudio}</span>
                  </p>
                  <p className="lg:text-[12px] md:text-[12px] text-[10px] ">
                    {movie.Runtime}
                  </p>
                  <p className="lg:text-[12px] md:text-[12px] text-[10px] text-gray-500 ">
                    {movie.ReleaseDate}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
