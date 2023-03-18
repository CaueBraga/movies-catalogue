import Image from "next/image";
import Ryan from "../assets/ryan.png";
export function MovieCast({ creditsData }: any) {
  return (
    <div className="mt-20 text-black mb-20">
      <h1 className="text-2xl font-bold">Original Cast</h1>
      <div className="flex gap-6 mt-8 max-w-full overflow-x-scroll pb-6">
        <div className="flex flex-col bg-white p-2 drop-shadow-lg rounded">
          <Image
            className="min-w-[176px] h-56 rounded drop-shadow-lg"
            width={176}
            height={224}
            src={Ryan}
            alt="Picture unavailable ☹"
          />
          <strong className="mt-4 mb-2">Ryan Reinalds</strong>
          <span>Wade / Deadpool</span>
        </div>
      </div>
    </div>
  );
}
