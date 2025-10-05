import type { ReactNode } from "react";

type WrapperProps = { title: string; children: ReactNode };
const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <main className="max-w-[1000px] min-h-[100dvh] mx-auto p-2 flex flex-col justify-center gap-8">
      <h1 className="font-bold text-xl text-center">{title}</h1>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {children}
      </div>
    </main>
  );
};

export default Wrapper;
