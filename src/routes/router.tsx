import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<h3>Loading...</h3>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
