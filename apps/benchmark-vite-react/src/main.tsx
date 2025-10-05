import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const FA = lazy(() => import("./pages/FA"));
const EV = lazy(() => import("./pages/EV"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/fa",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FA />
      </Suspense>
    ),
  },
  {
    path: "/ev",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EV />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
