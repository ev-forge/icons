import { svgSearchSolid } from "@ev-forge/icon-library";
import { metadata } from "@ev-forge/icon-library";
import { useMemo, useState } from "react";
import { Box } from "../Box";
import { useDebounce } from "../hooks/useDebounce";

type MetadataItem = { name: string; code: string };
const filterItems = (query: string, items: MetadataItem[]): MetadataItem[] => {
  if (!query) return [];
  return items
    .filter((c) => c.name.toLocaleLowerCase().includes(query.toLowerCase()))
    .slice(0, 20);
};

export const Previewer = () => {
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);

  const filteredMetadata = useMemo(
    () => filterItems(queryDebounce, metadata),
    [queryDebounce, metadata]
  );

  return (
    <main className="flex flex-col items-center gap-10">
      <section className="w-full max-w-[800px] min-h-[100dvh] p-4 flex flex-col justify-center gap-4 md:gap-10">
        <h1 className="text-4xl text-center">What icon are you looking for?</h1>
        <div className="w-full">
          <div className="w-full grid grid-cols-[1fr_auto] bg-white text-ev-dark text-4xl rounded-4xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-4 rounded-l-4xl"
              placeholder="ex: home, arrow, etc"
              autoFocus
            />
            <button className="p-4 rounded-r-4xl">
              <ev-icon svg={svgSearchSolid}></ev-icon>
            </button>
          </div>
          <p className="text-center">
            Icons has the next nomenclature: svg + name + type, ex: svgHomeSolid
          </p>
        </div>
        {queryDebounce && filteredMetadata.length === 0 && (
          <div>Can not find icons with that name, try with with other</div>
        )}
        {queryDebounce && filteredMetadata.length > 0 && (
          <>
            <div>
              There are {metadata.length} icons with{" "}
              <span className="font-bold">'{queryDebounce}'</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredMetadata.map((c) => (
                <Box key={c.name} label={c.name} code={c.code} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};
