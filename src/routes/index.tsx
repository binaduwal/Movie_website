import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import MainLayout from "../layouts/MainLayout";
import Trending from "../pages/Trending";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import MovieDetail from "../pages/MovieDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}
