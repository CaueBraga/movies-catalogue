import Image from "next/image";
import { MovieType, Credits } from "../types";

interface MovieDetailsProps {
  movie: MovieType;
  creditsData: Credits | undefined;
}

export function MovieDetails({ movie, creditsData }: MovieDetailsProps) {
  const getCrew = () => {
    if (!creditsData) return [];

    const producer = creditsData.crew.find(
      (crewMember: any) => crewMember.job === "Producer"
    );
    const director = creditsData.crew.find(
      (crewMember: any) => crewMember.job === "Director"
    );
    const screenPlay = creditsData.crew.find(
      (crewMember: any) => crewMember.job === "Screenplay"
    );
    const writer = creditsData.crew.find(
      (crewMember: any) => crewMember.job === "Writer"
    );
    const editor = creditsData.crew.find(
      (crewMember: any) => crewMember.job === "Editor"
    );
    return [producer, director, screenPlay, writer, editor].filter(
      (element) => element
    );
  };

  return (
    <div className="bg-purple-900 text-gray-100 flex pt-8 md:pt-20 pb-4 px-4 lg:px-28 md:px-12">
      <div className="flex gap-8 pb-8 flex-col md:flex-row">
        <div className="md:mb-[-70px] m-auto">
          <Image
            loading="lazy"
            className="rounded-lg drop-shadow-2xl h-72 w-44 md:min-h-[576px] md:min-w-[384px]"
            width={383}
            height={474}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className="max-w-2xl">
          <strong className="text-4xl">{movie.title} • </strong>
          <span className="text-2xl">{movie.release_date.substring(0, 4)}</span>
          <div>
            <div className="mt-3 text-lg">
              {movie.release_date} •{" "}
              {movie.genres.map((genre: any, index: number) => (
                <span key={genre.id}>
                  {genre.name}
                  {index === movie.genres.length - 1 ? "" : ", "}
                </span>
              ))}{" "}
              • {movie.runtime} min
            </div>
            <div className="flex items-baseline gap-3">
              <div
                style={
                  {
                    "--size": "60px",
                    "--value": `${movie.vote_average * 10}`,
                  } as any
                }
                className="mt-4 text-xl radial-progress bg-violet-900 text-[#14FF00]"
              >
                {Math.round(movie.vote_average * 10)}%
              </div>
              <span>Users Ratings</span>
            </div>

            <div>
              <h2 className="font-bold text-xl mt-8">Synopsis</h2>
              <p className="pt-2 text-lg">{movie.overview}</p>
            </div>
            <div className="flex flex-wrap gap-6 gap-x-14 mt-12">
              {getCrew().map((crewMember: any) => (
                <div key={crewMember.id} className="w-40">
                  <strong className="block">{crewMember.name}</strong>
                  <span>{crewMember.job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
