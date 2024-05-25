"use client";
import { getMovies } from "@/lib/getMovies";
import { FilePenLine, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LatestMovies from "./LatestMovies";
import Links from "./Links";

const AllMovies = () => {
  const user = true;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };
    fetchData();
  }, []);

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/movies?id=${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMovies(movies.filter((movie) => movie._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="lg:grid grid-cols-[9fr,3fr] font pt-10">
      <div>
        <h1 className="text-1xl pl-2 border-0 border-l-2 rounded-md border-red-700">
          All Movies
        </h1>
        <div className="grid grid-cols-3 mx-6 lg:grid-cols-5 md:grid-cols-4">
          {movies.map((movie, i) => (
            <div key={i}>
              <Image
                width={50}
                height={50}
                src={movie.MoviesTitle}
                alt="Movie title"
                className="mb-4 mt-10 gap-3 lg:w-[142px] lg:h-[195px] md:w-[150px] md:h-[200px] w-[130px] h-[160px] "
              />
              <div>
                <Link href={`/single-movie/${movie._id}`}>
                  <p className="lg:text-[12px] md:text-[12px] text-[10px] ">
                    {movie.MoviesName}
                  </p>
                  <p className="lg:text-[12px] md:text-[12px] text-[10px] text-gray-500 ">
                    {movie.ReleaseDate}
                  </p>
                </Link>
              </div>
              {user && (
                <div className="flex mx-4">
                  <X
                    className="cursor-pointer"
                    onClick={() => handleDeleteBtn(movie._id)}
                    size={14}
                  />
                  <Link href={`/update-movies/${movie._id}`}>
                    <FilePenLine className="ml-12" size={14} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <Links />
        <LatestMovies />
      </div>
    </div>
  );
};

export default AllMovies;
