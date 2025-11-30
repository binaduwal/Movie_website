import { use, useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import { api } from "../../api/axiosClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieBanner from "../../components/movie/movieBanner";
import MovieCard from "../../components/movie/MovieCard";
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
  <>
    <div className="w-full">
      <Slider {...settings} className="mb-12 rounded-2xl">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieBanner movie={movie} />
          </div>
        ))}
      </Slider>
    </div>

    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  </>
);

};

export default HomePage;
