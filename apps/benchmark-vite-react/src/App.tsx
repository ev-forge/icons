function App() {
  return (
    <div className="max-w-[1000px] min-h-[100dvh] mx-auto p-2 flex flex-col justify-center gap-4">
      <h1 className="text-blue-500 font-bold text-4xl">
        Icon Library Performance Benchmark (Vite + React)
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl">Baseline: Framework-Specific Components</h2>
          <a href="/fa" className="underline text-blue-400">
            Rendering with @fortawesome/react-fontawesome
          </a>
        </div>
        <div>
          <h2 className="text-xl">
            Alternative: Framework-Agnostic Web Components
          </h2>
          <a href="/ev" className="underline text-blue-400">
            Rendering with @ev-forge/icons
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
