import axios from "axios";
import { Header } from "@/components/Header";
import { MovieCast } from "@/components/MovieCast";
import { MovieDetails } from "@/components/MovieDetails";
import { Recomendations } from "@/components/Recomendations";
import { API_KEY } from "@/pages";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MovieType, Credits, Recomendation, Trailer } from "../../../types";

import { api } from "../../../lib/axios";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;

  const [creditsData, setCreditsData] = useState<Credits>();
  const [recomendationsData, setRecomendationsData] = useState<Recomendation>();
  const [trailerData, setTrailerData] = useState<Trailer>();
  const [movieDetails, setMovieDetails] = useState<MovieType>();

  useEffect(() => {
    const callApi = async () => {
      const [
        creditsDataResponse,
        recomendationsDataResponse,
        trailerDataResponse,
        movieDetailsResponse,
      ] = await Promise.all([
        api.get(`${id}/credits?api_key=${API_KEY}&language=en-US`),
        api.get(`${id}/recommendations?api_key=${API_KEY}&language=en-US`),
        api.get(`${id}/videos?api_key=${API_KEY}&language=en-US`),
        api.get(`${id}?api_key=${API_KEY}&language=en-US`),
      ]);
      setCreditsData(creditsDataResponse.data);
      setRecomendationsData(recomendationsDataResponse.data);
      setTrailerData(trailerDataResponse.data);
      setMovieDetails(movieDetailsResponse.data);
    };

    if (id) {
      callApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <Header />

      <MovieDetails movie={movieDetails} creditsData={creditsData} />

      <div className="px-4 md:px-28 pb-96">
        <MovieCast creditsData={creditsData} />

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

        <Recomendations recomendationData={recomendationsData} />
      </div>
    </div>
  );
}
