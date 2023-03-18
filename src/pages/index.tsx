import axios from "axios";
import { useEffect, useState } from "react";
import { FilterSection } from "@/components/FilterSection";
import { Header } from "@/components/Header";
import { MoviePosterContainer } from "@/components/MoviePosterContainer";
import { MovieType, Genre } from "../types";

export const API_KEY = "d2d06aeabc68ef97fb19e37535438935";

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `
        https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      setMovies(response.data.results);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      setGenres(response.data.genres);
      console.log(response.data.genres);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    </>
  );
}
