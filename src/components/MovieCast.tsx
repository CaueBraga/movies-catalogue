import Image from "next/image";
import { idText } from "typescript";
import avatar from "../assets/avatar.png";
import { Credits } from "../types";

export interface MovieCastProps {
  cast: Credits | undefined;
}

export function MovieCast({ cast }: MovieCastProps) {
  return (
    <div className="mt-20 text-black mb-20">
      <h1 className="text-2xl font-bold">Original Cast</h1>
      <div className="flex gap-6 mt-8 max-w-full overflow-x-scroll pb-6">
        {cast?.cast.map((castMember: any) => {
          if (castMember.profile_path === null)
            return (
              <div
                key={castMember.cast_id}
                className="flex flex-col bg-white p-2 drop-shadow-lg rounded"
              >
                <Image
                  loading="lazy"
                  className="min-w-[176px] h-56 rounded drop-shadow-lg"
                  width={176}
                  height={224}
                  src={avatar}
                  alt="Picture unavailable ☹"
                />
                <strong className="mt-4 mb-2">{castMember.name}</strong>
                <span>{castMember.character}</span>
              </div>
            );

          return (
            <div
              key={castMember.cast_id}
              className="flex flex-col bg-white p-2 drop-shadow-lg rounded"
            >
              <Image
                loading="lazy"
                className="min-w-[176px] h-56 rounded drop-shadow-lg"
                width={176}
                height={224}
                src={`https://image.tmdb.org/t/p/original${castMember.profile_path}`}
                alt="Picture unavailable ☹"
              />
              <strong className="mt-4 mb-2">{castMember.name}</strong>
              <span>{castMember.character}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
