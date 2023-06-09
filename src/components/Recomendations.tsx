import Image from "next/image";
import Link from "next/link";
import { Recomendation } from "../types";
import Ryan from "../assets/ryan.png";

export interface RecomendationsProps {
  recomendationsData: Recomendation | undefined;
}
export function Recomendations({ recomendationsData }: RecomendationsProps) {
  return (
    <div className="mt-16 text-black">
      <h1 className="text-2xl font-bold">Recomendations</h1>

      {recomendationsData!.results.length > 0 && (
        <div className="flex gap-6 mt-8 max-w-full overflow-x-scroll pb-6">
          {recomendationsData?.results.map((movie: any) => {
            if (movie.poster_path === null)
              return (
                <div
                  key={movie.id}
                  className="flex flex-col bg-white p-2 drop-shadow-lg rounded"
                >
                  <Link
                    href={{
                      pathname: `/movie/[route]`,
                      query: { route: movie.id },
                    }}
                  >
                    <Image
                      loading="lazy"
                      className="min-w-[176px] h-56 rounded drop-shadow-lg"
                      width={176}
                      height={224}
                      src={Ryan}
                      alt=""
                    />
                  </Link>
                  <strong className="mt-4 mb-2">{movie.title}</strong>
                  <span>{movie.release_date}</span>
                </div>
              );

            return (
              <div
                key={movie.id}
                className="flex flex-col bg-white p-2 drop-shadow-lg rounded"
              >
                <Link
                  href={{
                    pathname: `/movie/[route]`,
                    query: { route: movie.id },
                  }}
                >
                  <Image
                    loading="lazy"
                    className="min-w-[176px] h-56 rounded drop-shadow-lg"
                    width={176}
                    height={224}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                  />
                </Link>
                <strong className="mt-4 mb-2">{movie.title}</strong>
                <span>{movie.release_date}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
