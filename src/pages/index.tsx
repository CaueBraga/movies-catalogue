import axios from "axios";
import { useEffect, useState } from "react";
import { FilterSection } from "@/components/FilterSection";
import { Header } from "@/components/Header";
import { MoviePosterContainer } from "@/components/MoviePosterContainer";
import { MovieType, Genre } from "../types";
import arrowLeft from "../assets/Arrow-left.png";
import arrowRight from "../assets/Arrow-right.png";
import Image from "next/image";
export const API_KEY = "d2d06aeabc68ef97fb19e37535438935";

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `
        https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        {
          params: {
            page: currentPage,
          },
        }
      );
      setMovies(response.data.results);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      setGenres(response.data.genres);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPages = () => {
    if (currentPage < 3) return [1, 2, 3, 4, 5];

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  };

  return (
    <>
      <Header />
      <div className="bg-purple-900 text-white flex py-10 px-4 flex-1 h-fit justify-center items-center">
        <div className="max-w-screen-lg">
          <h1 className="text-2xl sm:text-5xl sm:text-center font-bold text-gray-100 leading-tight mr-16">
            Millions of movies, shows and people to discover.{" "}
            <span className="block sm:inline">Explore now.</span>
          </h1>
        </div>
      </div>

      <FilterSection genres={genres} />

      <MoviePosterContainer movies={movies} />

      <div className="mb-5 sm:mb-40 flex justify-center">
        <button
          className="text-purple-400 px-4 py-2 font-bold hover:bg-slate-100 rounded-full"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(currentPage - 1);
          }}
        >
          <Image width={24} height={24} src={arrowLeft} alt="" />
        </button>
        {getPages().map((page) => (
          <button
            key={page}
            className={` px-4 py-2 font-bold rounded-full hover:bg-slate-100 ${
              currentPage === page
                ? "text-purple-900 bg-slate-100"
                : "text-purple-400"
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        ))}
        <button
          className="text-purple-400 px-4 py-2 font-bold hover:bg-slate-100 rounded-full"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentPage(currentPage + 1);
          }}
        >
          <Image width={24} height={24} src={arrowRight} alt="" />
        </button>
      </div>
    </>
  );
}
