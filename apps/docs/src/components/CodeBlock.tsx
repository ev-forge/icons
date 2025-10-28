import { useMemo, useState } from "react";
import { IconButton } from "@ev-forge/components";
import { svgCheckCircleSolid, svgCopySolid } from "@ev-forge/icons";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";

type Language1 = "javascript" | "html" | "bash" | "json" | "typescript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("html", html);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);

export const highlight = (language: Language1, code: string) =>
  hljs.highlight(code, { language }).value;

type CodeBlockProps = { lang: Language1; code: string };
export const CodeBlock = ({ lang, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const highlighted = useMemo(() => highlight(lang, code), []);

  const onCopy = () => {
    try {
      console.log("copu");
      setCopied(true);
      navigator.clipboard.writeText(code);
      setTimeout(() => setCopied(false), 4000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-1 text-ev-primary-contrast bg-ev-primary rounded-md">
      <div className="px-2 mx-2 flex justify-between items-center  ">
        <div className="capitalize">{lang}</div>
        <IconButton onClick={onCopy} aria-label="Copy" _size="sm">
          <ev-icon svg={copied ? svgCheckCircleSolid : svgCopySolid} />
        </IconButton>
      </div>
      <pre>
        <code
          className={`hljs language-${lang}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
};
