export interface Movie {
    id:number;
    title:string;
    bannerUrl:string;
    overview:string;
    poster_path:string;
}

export interface movieProps {
  movie?: Movie;
}

