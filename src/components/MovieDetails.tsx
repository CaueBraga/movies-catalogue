import Image from "next/image";
import dp from "../assets/dp.svg";

export function MovieDetails({ movie, creditsData }: any) {
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
          <strong className="text-2xl">{movie.title} • </strong>
          <span className="text-2xl">{movie.release_date.substring(0, 4)}</span>
          <div>
            <div>
              {movie.genres.map((genre: any, index: number) => (
                <span key={genre.id}>
                  {genre.name}
                  {index === movie.genres.length - 1 ? "" : ", "}
                </span>
              ))}

              {/* todo: duration props */}

              <span>3 horas</span>
            </div>
            <div className="flex items-baseline gap-3">
              <div className="mt-4  radial-progress bg-violet-900 text-[#14FF00]">
                55%
              </div>
              <span>Users Ratings</span>
            </div>
            <div>
              <h2 className="font-bold text-xl mt-8">Synopsis</h2>
              <p className="pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quam amet debitis itaque accusantium cupiditate,
                reprehenderit facere nemo sapiente odit aliquam blanditiis quia
                nesciunt, corrupti omnis odio tempora? Cupiditate, molestias.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 gap-x-14 mt-12">
              <div className="w-40">
                <strong className="block">roberto</strong>
                <span>diretor</span>
              </div>
              <div className="w-40">
                <strong className="block">roberto</strong>
                <span>diretor</span>
              </div>
              <div className="w-40">
                <strong className="block">roberto</strong>
                <span>diretor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
