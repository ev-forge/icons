import {
  svgCloudSolid,
  svgMotorcycleSolid,
  svgPersonWalkingSolid,
  svgSearchSolid,
} from "@ev-forge/icons";
import { metadata } from "@ev-forge/icons";
import { useEffect, useMemo, useState } from "react";
import { Box } from "../Box";
import { useDebounce } from "../hooks/useDebounce";
import { Button, Input } from "@ev-forge/components";

type MetadataItem = { name: string; code: string };
const filterItems = (query: string, items: MetadataItem[]): MetadataItem[] => {
  console.log({ query, items });
  if (!query) return [];
  const rr = items
    .filter((c) => c.name.toLocaleLowerCase().includes(query.toLowerCase()))
    .slice(0, 20);
  console.log({ rr });
  return rr;
};

export const Previewer = () => {
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const [filteredMetadata, setFilteredMetadata] = useState<MetadataItem[]>([]);

  useEffect(() => {
    setFilteredMetadata(filterItems(queryDebounce, metadata));
  }, [queryDebounce, metadata]);

  console.log({ filteredMetadata });

  return (
    <main className="w-full h-full min-h-dvh flex flex-col items-center gap-10">
      <section
        className={`${
          query
            ? "h-[calc(40dvh-141px)] border-none pb-11"
            : "h-[40dvh] border-b-2 pb-0"
        } w-full bg-ev-primary flex flex-col items-center justify-center gap-0 border-b-2`}
      >
        <div className="relative w-full max-w-[375px] flex-1 px-4">
          <ev-icon
            svg={svgCloudSolid}
            className={`absolute text-ev-destructive-contrast ${
              query ? "text-[60px] bottom-[22px]" : "text-[80px] bottom-14"
            }  left-9`}
          ></ev-icon>
          <ev-icon
            svg={svgCloudSolid}
            className={`absolute text-ev-destructive-contrast ${
              query ? "text-[32px] bottom-[41px]" : "text-[43px] bottom-[81px]"
            } left-[147px]`}
          ></ev-icon>
          <ev-icon
            svg={svgCloudSolid}
            className={`absolute text-ev-destructive-contrast ${
              query ? "text-[32px] bottom-[27px]" : "text-[43px] bottom-[61px]"
            } right-[148px]`}
          ></ev-icon>
          <ev-icon
            svg={svgCloudSolid}
            className={`absolute text-ev-destructive-contrast ${
              query ? "text-[67px] bottom-[21px]" : "text-[91px] bottom-14"
            } right-9`}
          ></ev-icon>
        </div>
        <div className="relative w-full max-w-[800px] px-4">
          <Input
            _color="foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ backgroundColor: "white" }}
            className="pl-6 py-4 pr-14 rounded-4xl border-2 border-ev-background-contrast bg-ev-background placeholder:font-bold placeholder:text-center"
            placeholder="Looking for an icon?"
            autoFocus
          />
          <Button
            _variant="solid"
            _color="foreground"
            className="absolute translate-y-1/2 bottom-1/2 right-6 rounded-full p-2 text-3xl"
          >
            <ev-icon svg={svgSearchSolid}></ev-icon>
          </Button>
        </div>
        <div
          className={`relative w-full max-w-[800px] h-[68px] pr-[72px] text-ev-background flex items-end justify-end ${
            query ? "hidden" : "block"
          }`}
        >
          <svg
            width="14"
            height="40"
            viewBox="0 0 14 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0.5 right-[104px]"
          >
            <path
              d="M12.4362 1.00008L11.5261 36.8876L1.41431 1.00008H12.4362Z"
              fill="white"
            />
            <line
              x1="1"
              y1="-1"
              x2="10.5245"
              y2="-1"
              transform="matrix(0.999992 0.00401936 -0.00409464 0.999992 1.24146 1.99597)"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12.8594 2.36521L12.2774 38.4993"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="12.1848"
              y1="38.609"
              x2="1.00032"
              y2="2.2499"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <ev-icon
            svg={svgPersonWalkingSolid}
            className=" text-[25px]"
          ></ev-icon>
          <ev-icon svg={svgMotorcycleSolid} className="text-[17.4]"></ev-icon>
        </div>
      </section>
      <section className="flex-1 w-full max-w-[800px] px-4 flex flex-col items-center justify-center gap-7">
        <p className="text-center">
          Icons nomenclature: svg + name + type. Ex: svgHomeSolid
        </p>
        {queryDebounce && filteredMetadata.length === 0 && (
          <div>Can not find icons with that name, try with with other</div>
        )}
        {queryDebounce && filteredMetadata.length > 0 && (
          <>
            <h2 className="text-3xl font-bold">
              Filtered {metadata.length} icons related to{" "}
              <span className="font-bold text-ev-primary">
                '{queryDebounce}'
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredMetadata.map((c) => (
                <Box key={c.name} label={c.name} code={c.code} />
              ))}
            </div>
          </>
        )}
        {!queryDebounce && (
          <>
            <h2 className="text-3xl text-center font-bold">
              We have{" "}
              <span className="font-bold text-ev-primary">
                {metadata.length} icons
              </span>{" "}
              ready to use
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {filteredMetadata.map((c) => (
                <Box key={c.name} label={c.name} code={c.code} />
              ))}
            </div>

            {/* 🚨 TODO: add infinity scroll */}
            {filteredMetadata.length === 0 && (
              <Button onClick={() => setFilteredMetadata(metadata)}>
                Load All
              </Button>
            )}
          </>
        )}
      </section>
    </main>
  );
};
