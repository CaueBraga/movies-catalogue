import { Header } from "@/components/Header";
import { MovieCast } from "@/components/MovieCast";
import { MovieDetails } from "@/components/MovieDetails";
import { Recomendations } from "@/components/Recomendations";

export default function Movie() {
  return (
    <div className="bg-gray-100">
      <Header />

      <MovieDetails />

      <div className="px-4 md:px-28 pb-96">
        <MovieCast />

        <div>
          <div className="text-2xl  text-black font-bold mb-6">Trailer</div>

          <iframe
            loading="lazy"
            className="md:w-full h-96 lg:w-[900px] lg:h-[500px]"
            id="ytplayer"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            width="100%"
            height="100%"
            src="https://www.youtube.com/watch?v=Q9X-bAE8KTc"
            frameBorder="0"
          ></iframe>
        </div>

        <Recomendations />
      </div>
    </div>
  );
}
