import MainLayout from "layouts/main-layout";
import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Splash from "components/loader/Splash";
import PageLoader from "components/loader/PageLoader";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/Home"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout>
              <Outlet />
            </MainLayout>
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
