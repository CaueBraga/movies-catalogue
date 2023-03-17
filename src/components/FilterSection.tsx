export interface Genre {
  id: number;
  name: string;
}
interface FilterSectionProps {
  genres: Genre[];
}

export function FilterSection({ genres }: FilterSectionProps) {
  return (
    <div className="flex sm:items-center bg-purple-900 flex-col p-4">
      <span className="font-bold text-gray-100 text-sm uppercase mb-4 ">
        filter by:
      </span>

      <div className="sm:text-center flex flex-wrap gap-4 sm:px-8 sm:justify-center">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="px-4 py-2 rounded font-bold bg-gray-100 text-black hover:bg-gray-300"
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
