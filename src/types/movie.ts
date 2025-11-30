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

export interface MovieSectionProps {
  title: string;
  endpoint: string;
  limit?: number;
}


