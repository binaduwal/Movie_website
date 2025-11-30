import {useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import { api } from "../../api/axiosClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieBanner from "../../components/movie/movieBanner";
import MovieSection from "../../components/movie/MovieSection";
const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get(`/3/movie/now_playing`);
      setMovies(response.data.results.slice(0, 6));
    };
    loadMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    swipe: true,
  };
  console.log(movies, "results");
  return (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <Slider {...settings} className="mb-12 rounded-2xl">
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieBanner movie={movie} />
            </div>
          ))}
        </Slider>
      </div>

      <MovieSection title="Popular" endpoint="3/tv/popular" limit={10} />
      <MovieSection title="Top Rated" endpoint="/3/movie/top_rated" limit={10} />
    </div>
  );
};

export default HomePage;
