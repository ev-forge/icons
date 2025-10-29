import { useEffect, useState } from "react";

const toCamelCase = (str: string) =>
  str
    .replace(/-./g, (match) => match.charAt(1).toUpperCase())
    .replace(/^./, (match) => match.toLowerCase());

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

type BoxProps = { label: string; code: string };
export const Box = ({ label, code }: BoxProps) => {
  const [wasCopied, setWasCopied] = useState(false);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const onCopy = async () => {
    if (wasCopied) return;

    await navigator.clipboard.writeText(code);
    setWasCopied(true);
    setTimeout(() => setWasCopied(false), 2000);
  };

  useEffect(() => {
    try {
      setSvgContent(null);
      setError(false);
      const pathFixed = `/icons/${label}.svg`;
      fetch(pathFixed)
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.text();
        })
        .then((text) => setSvgContent(text))
        .catch(() => setError(true));
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (error) return <div className="bg-amber-700">{error}</div>;

  return (
    <button
      onClick={onCopy}
      className={`w-40 md:w-[180px] p-4 rounded-2xl aspect-square grid grid-rows-[2fr_1fr] place-items-center gap-2 ${
        wasCopied
          ? "bg-ev-primary-harder text-ev-primary-contrast"
          : "bg-white hover:bg-ev-primary hover:text-ev-primary-contrast"
      }`}
    >
      {svgContent && <ev-icon svg={svgContent} className="w-16" />}
      {wasCopied && (
        <p className="w-full text-center font-bold">Prop Copied!</p>
      )}
      {!wasCopied && (
        <div className="w-full flex flex-col">
          <div className="text-sm">{label}</div>
        </div>
      )}
    </button>
  );
};
