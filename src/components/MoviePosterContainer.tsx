import Image from "next/image";
import Link from "next/link";
import example from "../assets/example.png";

export interface Genre {
  id: number;
  name: string;
}
export interface MovieType {
  title: string;
  release_date: string;
  poster_path: string;
  genres: Genre[];
  runtime: number;
  vote_average: number;
  overview: string;
}

export function MoviePosterContainer({ movies }: any) {
  return (
    <div className="mt-8 px-2 sm:px-28 flex justify-center gap-4 mb-10 sm:gap-8 flex-wrap">
      {movies.map((movie: any) => (
        <div key={movie.id} className="flex flex-col sm:m-0">
          {" "}
          <Link href={{ pathname: `/movie/[route]`, query: { route: 12 } }}>
            {" "}
            <Image
              loading="lazy"
              width={176}
              height={264}
              src={example}
              alt=""
            />{" "}
          </Link>
          <strong className="mt-2 text-black max-w-[176px] truncate">
            {movie.title}
          </strong>
          <span className="text-black text-sm font-bold">
            {movie.release_date}
          </span>
        </div>
      ))}
    </div>
  );
}
