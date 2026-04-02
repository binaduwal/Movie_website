import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import PageLoader from "../components/PageLoader";
import { WishList } from "../pages/WishList";
import { ProtectedRoute } from "./ProtectedRoute";
import { Suspense } from "react";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const Trending = lazy(() => import("../pages/Trending"));
const TopRated = lazy(() => import("../pages/TopRated"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const NotFoundMoviePage = lazy(() => import("../404NotFound"));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: withSuspense(HomePage),
      },
      {
        path: "/trending",
        element: withSuspense(Trending),
      },
      {
        path: "/top-rated",
        element: withSuspense(TopRated),
      },
      {
        path: "/movie/:id",
        element: withSuspense(MovieDetail),
      },
      {
        path: "/tv/:id",
        element: withSuspense(MovieDetail),
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/wishlist",
            element: withSuspense(WishList),
          },
        ],
      },

      {
        path: "*",
        element: withSuspense(NotFoundMoviePage),
      },
    ],
  },
]);