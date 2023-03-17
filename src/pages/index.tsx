import { FilterSection } from "@/components/FilterSection";
import { Header } from "@/components/Header";
import { MoviePosterContainer } from "@/components/MoviePosterContainer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-purple-900 text-white flex py-10 px-4 flex-1 h-fit justify-center items-center">
        <div className="max-w-screen-lg">
          <h1 className="text-2xl sm:text-5xl sm:text-center font-bold leading-tight mr-16">
            Millions of movies, shows and people to discover.{" "}
            <span className="block sm:inline">Explore now.</span>
          </h1>
        </div>
      </div>

      <FilterSection />

      <MoviePosterContainer />
    </>
  );
}
