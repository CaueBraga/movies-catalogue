export interface Genre {
  id: number;
  name: string;
}
interface FilterSectionProps {
  genres: Genre[];
  filters: number[];
  handleToFilter: Function;
}

export function FilterSection({
  genres,
  handleToFilter,
  filters,
}: FilterSectionProps) {
  return (
    <div className="flex sm:items-center bg-purple-900 flex-col p-4">
      <span className="font-bold text-gray-100 text-sm uppercase mb-4 ">
        filter by:
      </span>

      <div className="sm:text-center flex flex-wrap gap-4 sm:px-8 sm:justify-center">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`px-4 py-2 rounded font-bold ${
              filters.includes(genre.id)
                ? "bg-highlight-500 text-white hover:bg-highlight-700"
                : "bg-gray-100 text-black hover:bg-highlight-500"
            }`}
            onClick={() => {
              handleToFilter(genre.id);
            }}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
