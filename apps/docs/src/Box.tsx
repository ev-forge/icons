import { useEffect, useState } from "react";
import { Button } from "@ev-forge/components";
import type { Metadata } from "@ev-forge/icons";

type BoxProps = {
  metadata: Metadata;
  fnSelectIcon: (_: Metadata) => void;
};
export const Box = ({ metadata, fnSelectIcon }: BoxProps) => {
  const [wasCopied, setWasCopied] = useState(false);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(metadata.code);
    setWasCopied(true);
    setTimeout(() => setWasCopied(false), 3000);
  };

  useEffect(() => {
    try {
      setSvgContent(null);
      setError(false);
      const pathFixed = `/icons/${metadata.code}.svg`;
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

  if (wasCopied)
    return (
      <div className="w-24 p-2 md:w-30 md:p-4 rounded-2xl aspect-square grid place-items-center bg-ev-primary-harder text-ev-primary-contrast">
        <p className="w-full text-center font-bold">Prop Copied!</p>
        <Button
          onClick={() => fnSelectIcon(metadata)}
          _color="foreground"
          _size="sm"
        >
          Example
        </Button>
      </div>
    );

  return (
    <button
      onClick={onCopy}
      className={`w-24 p-2 md:w-30 md:p-4 text-2xl md:text-4xl rounded-2xl aspect-square grid place-items-center ${"bg-white hover:bg-ev-primary hover:text-ev-primary-contrast"}`}
    >
      {svgContent && <ev-icon svg={svgContent} />}
    </button>
  );
};
