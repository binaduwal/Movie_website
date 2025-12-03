export interface Movie {
    id:number;
    title:string;
    bannerUrl:string;
    overview:string;
    poster_path:string;
}

export interface movieProps {
  movie?: Movie;
  movieType?: "movie" | "tv";
}

export interface MovieSectionProps {
  title: string;
  endpoint: string;
  limit?: number;
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
}


