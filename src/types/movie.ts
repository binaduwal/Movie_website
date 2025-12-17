export interface Movie {
  id: number;
  title: string;
  bannerUrl?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?:string;
  name?:string;
  media_type?: "movie" | "tv";
}

export interface movieProps {
  movie?: Movie;
  movieType?: "movie" | "tv";
  showDelete?: boolean;
  onDelete?: (id: number) => void;
}

export interface MovieSectionProps {
  title: string;
  movies: Movie[];
  movieType?: "movie" | "tv";
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
  production_companies: {
    name: string;
  }[];
  first_air_date: string;
  name: string;

}
