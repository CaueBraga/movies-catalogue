import Image from "next/image";
import Link from "next/link";
import example from "../assets/example.png";

export function Recomendations({ recomendationsData }: any) {
  return (
    <div className="mt-16 text-black">
      <h1 className="text-2xl font-bold">Recomendations</h1>

      <div className="flex gap-6 mt-8 max-w-full overflow-x-scroll pb-6">
        <div className="flex flex-col bg-white p-2 drop-shadow-lg rounded">
          <Link
            href={{
              pathname: `/movie/[route]`,
              query: { route: 12 },
            }}
          >
            <Image
              loading="lazy"
              className="min-w-[176px] h-56 rounded drop-shadow-lg"
              width={176}
              height={224}
              src={example}
              alt=""
            />
          </Link>
          <strong className="mt-4 mb-2">Oi, alberto</strong>
          <span>12 nov 2021</span>
        </div>
      </div>
    </div>
  );
}
