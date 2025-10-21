import {
  svgASolid,
  svgBSolid,
  svgCabSolid,
  svgCarOnSolid,
  svgDAndDBrands,
  svgGSolid,
  svgHomeSolid,
  svgNodeBrands,
  svgZSolid,
} from "@ev-forge/icons";

// const icons = Object.entries(evIconLibrary);

export const Previewer = () => {
  // console.log({ icons });
  return (
    <main>
      <h1>@ev-forge/icons</h1>
      <div className="flex flex-wrap gap-20">
        <ev-icon
          svg={svgHomeSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgHomeSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgZSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgCarOnSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgNodeBrands}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgASolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgBSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgCabSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgDAndDBrands}
          className="text-blue-500 border-2 border-blue-500"
        />
        <ev-icon
          svg={svgGSolid}
          className="text-blue-500 border-2 border-blue-500"
        />
        {/* {icons.map(([key, value]) => (
          <div
            key={key}
            className="w-[100px] aspect-square flex flex-col gap-2 items-center justify-center"
          >
            <ev-icon
              svg={value}
              className="text-blue-500 border-2 border-blue-500"
            />
            <div>{key.replace("svg", "")}</div>
          </div>
        ))} */}
      </div>
    </main>
  );
};
