import {
  solidCloud,
  solidMotorcycle,
  solidClose,
  solidPersonWalking,
  solidMagnifyingGlass,
} from "@ev-forge/icons";
import { metadata, type Metadata } from "@ev-forge/icons";
import { useEffect, useState } from "react";
import { Box } from "../Box";
import { useDebounce } from "../hooks/useDebounce";
import { Button, IconButton, Input } from "@ev-forge/components";
import { CodeBlock } from "./CodeBlock";
import { ICONS_PER_PAGE } from "../constants";
import { filterItems, onGetItemsPerPage } from "../utils";

const TOTAL_ITEMS = metadata.length;
const REST = TOTAL_ITEMS % ICONS_PER_PAGE;
const PAGES = Math.trunc(TOTAL_ITEMS / ICONS_PER_PAGE);
const TOTAL_PAGES = REST ? PAGES + 1 : PAGES;

export const Previewer = () => {
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const [filteredMetadata, setFilteredMetadata] = useState<Metadata[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<Metadata | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onLoadNextPage = () => {
    try {
      const nextPage = currentPage + 1;
      const nextPageItems = onGetItemsPerPage<Metadata>({
        page: nextPage,
        itemsPerPage: ICONS_PER_PAGE,
        totalItems: TOTAL_ITEMS,
        totalPages: TOTAL_PAGES,
        itemsList: metadata,
        restOfItems: REST,
      });
      setFilteredMetadata((p) => [...p, ...nextPageItems]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    setFilteredMetadata(filterItems(queryDebounce, metadata));
  }, [queryDebounce, metadata]);

  return (
    <main className="w-full h-full min-h-dvh flex flex-col items-center">
      <section
        className={`${
          query
            ? "h-[calc(40dvh-141px)] border-none pb-11"
            : "h-[40dvh] border-b-2 pb-0"
        } px-4 w-full transition-[height] bg-ev-primary flex flex-col items-center justify-center gap-0 border-b-2`}
      >
        {!query && (
          <div className={"relative w-full max-w-[375px] flex-1 px-4"}>
            <ev-icon
              svg={solidCloud}
              className={`absolute transition-[left,top,right,bottom] text-ev-destructive-contrast ${"text-[80px] bottom-14 left-9"}`}
            ></ev-icon>
            <ev-icon
              svg={solidCloud}
              className={`absolute transition-[left,top,right,bottom] text-ev-destructive-contrast ${"text-[43px] bottom-[81px] left-[147px]"} `}
            ></ev-icon>
            <ev-icon
              svg={solidCloud}
              className={`absolute transition-[left,top,right,bottom] text-ev-destructive-contrast ${"text-[43px] bottom-[101px] right-[120px]"}`}
            ></ev-icon>
            <ev-icon
              svg={solidCloud}
              className={`absolute transition-[left,top,right,bottom] text-ev-destructive-contrast ${"text-[91px] bottom-14"} right-9`}
            ></ev-icon>
          </div>
        )}
        <div className="relative w-full max-w-[800px] px-2 grid grid-cols-[1fr_auto] items-center rounded-4xl border-2 border-ev-background-contrast bg-ev-background">
          <Input
            _color="foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ backgroundColor: "white" }}
            className="py-4 rounded-4xl text-xl md:text-2xl border-none bg-ev-background! placeholder:font-bold placeholder:text-center"
            placeholder="Looking for an icon?"
            autoFocus
          />
          <IconButton
            _variant="solid"
            _color="foreground"
            aria-label="Search icon"
            className="rounded-full w-12 h-12 text-2xl"
          >
            <ev-icon svg={solidMagnifyingGlass}></ev-icon>
          </IconButton>
        </div>
        <div
          className={`relative w-full max-w-[800px] h-[68px] pr-[72px] text-ev-background! flex items-end justify-end ${
            query ? "hidden" : "block"
          }`}
        >
          <svg
            width="14"
            height="40"
            viewBox="0 0 14 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0.5 right-[104px] text-ev-background"
          >
            <path
              d="M12.4362 1.00008L11.5261 36.8876L1.41431 1.00008H12.4362Z"
              fill="#f8f1e5"
            />
            <line
              x1="1"
              y1="-1"
              x2="10.5245"
              y2="-1"
              transform="matrix(0.999992 0.00401936 -0.00409464 0.999992 1.24146 1.99597)"
              stroke="#f8f1e5"
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

          <ev-icon svg={solidPersonWalking} className=" text-[25px]"></ev-icon>
          <ev-icon svg={solidMotorcycle} className="text-[20px]"></ev-icon>
        </div>
      </section>
      <section className="flex-1 w-full max-w-[800px] p-4 flex flex-col items-center justify-center gap-7">
        {queryDebounce && filteredMetadata.length === 0 && (
          <div>Can not find icons with that name, try with with other</div>
        )}
        {queryDebounce && filteredMetadata.length > 0 && (
          <>
            <h2 className="text-xl md:text-3xl font-bold">
              Filtered {filteredMetadata.length} icons related to{" "}
              <span className="font-bold text-ev-primary">
                '{queryDebounce}'
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredMetadata.map((c) => (
                <Box key={c.code} metadata={c} fnSelectIcon={setSelectedIcon} />
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
                <Box key={c.code} metadata={c} fnSelectIcon={setSelectedIcon} />
              ))}
            </div>

            {filteredMetadata.length === 0 && (
              <Button onClick={onLoadNextPage}>
                Load {ICONS_PER_PAGE} Icons
              </Button>
            )}
            {filteredMetadata.length > 0 && currentPage < TOTAL_PAGES - 1 && (
              <Button onClick={onLoadNextPage}>Load More</Button>
            )}
          </>
        )}
      </section>
      {selectedIcon && (
        <section className="sticky bottom-0 max-w-[800px] w-full py-2 px-4">
          <div className="p-2 bg-ev-background-hard text-ev-foreground rounded-xl">
            <div className="flex justify-between items-center mb-1">
              <h2 className="mb-2 font-bold">Usage example</h2>
              <IconButton
                aria-label="Close example"
                onClick={() => setSelectedIcon(null)}
                _variant="flat"
                _size="sm"
              >
                <ev-icon svg={solidClose} />
              </IconButton>
            </div>
            <CodeBlock
              lang="javascript"
              code={`import {${selectedIcon.code}} from "@ev-forge/icons"
const App = () => <ev-icon svg={${selectedIcon.code}} />`}
            />
          </div>
        </section>
      )}
    </main>
  );
};
