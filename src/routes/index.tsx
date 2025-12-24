import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import PageLoader from "../components/PageLoader";
import { WishList } from "../pages/WishList";
import { ProtectedRoute } from "./ProtectedRoute";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const Trending = lazy(() => import("../pages/Trending"));
const TopRated = lazy(() => import("../pages/TopRated"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const NotFoundMoviePage = lazy(() => import("../404NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<MovieDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<WishList />} />
          </Route>
          <Route path="*" element={<NotFoundMoviePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
