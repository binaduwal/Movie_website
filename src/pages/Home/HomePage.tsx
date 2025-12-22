import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSection from "../../components/movie/MovieSection";
import BannerSkeleton from "../../components/skeletons/BannerSkeleton";
import MovieSectionSkeleton from "../../components/skeletons/MovieSectionSkeleton";
import { useMovies } from "../../hooks/useMovies";
import MovieBanner from "./movieBanner";
const HomePage = () => {
const {movies:nowPlaying,isLoading}=useMovies('/movie/now_playing')
const {movies:popular}=useMovies('/movie/popular')
const {movies:topRatedMovie}=useMovies('/movie/top_rated')
const {movies:topRatedSeries}=useMovies('/tv/top_rated')


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

      <MovieSection title="Popular Movies" movies={popular} movieType="movie" />
      <MovieSection
        title="Top Rated Movies"
        movies={topRatedMovie}
        movieType="movie"
      />
      <MovieSection
        title="Top Rated Series"
        movies={topRatedSeries}
        movieType="tv"
      />
    </>
        )}
    </div>
  );
};

export default HomePage;
