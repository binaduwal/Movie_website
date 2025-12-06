import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import { api } from "../../api/axiosClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieBanner from "../../components/movie/movieBanner";
import MovieSection from "../../components/movie/MovieSection";
import BannerSkeleton from "../../components/skeletons/BannerSkeleton";
import MovieSectionSkeleton from "../../components/skeletons/MovieSectionSkeleton ";
const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
          await Promise.all([
            api.get(`/3/movie/now_playing`),
            api.get(`/3/tv/popular`),
            api.get(`/3/movie/top_rated`),
            api.get(`/3/discover/movie`),
          ]);
        setNowPlaying(nowPlayingRes.data.results.slice(0, 6));
        setPopular(popularRes.data.results.slice(0, 10));
        setTopRated(topRatedRes.data.results.slice(0, 10));
        setUpcoming(upcomingRes.data.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error loading movies", error);
      }
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


  console.log(nowPlaying, "results");
  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <>
        <BannerSkeleton />
        <MovieSectionSkeleton/>        
        </>
      )
        :
        (
          <>
      <div className="w-full">
        <Slider {...settings} className="mb-12 rounded-2xl">
          {nowPlaying.map((movie) => (
            <div key={movie.id}>
              <MovieBanner movie={movie} />
            </div>
          ))}
        </Slider>
      </div>

      <MovieSection title="Popular" movies={popular} movieType="tv" />
      <MovieSection
        title="Top Rated Movies"
        movies={topRated}
        movieType="movie"
      />
      <MovieSection
        title="Upcoming Movies"
        movies={upcoming}
        movieType="movie"
      />
    </>
        )}
    </div>
  );
};

export default HomePage;
