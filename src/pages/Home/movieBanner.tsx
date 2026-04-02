import type {movieProps } from "../../types/movie";
import { Button } from "../../components/ui/button";
import {motion} from 'framer-motion'
import { useState } from "react";

const MovieBanner = ({ movie }: movieProps) => {
  const [loaded, setLoaded]=useState(false)
  const backdrop = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  return (
    <div className="relative h-56 sm:h-screen overflow-hidden ">
      <motion.img
        src={backdrop}
        alt={movie?.title}
        onLoad={()=>setLoaded(true)}
        initial={{scale:1.1}}
        animate={{scale:loaded ? 1 : 1.1}}
        transition={{duration:1.5,ease:"easeOut"}}
        className="object-cover object-top inset-0 w-full h-full bg-black/50"
      />
      <div className="absolute left-0 bottom-30 z-10 max-w-3xl space-y-2 px-4 sm:px-12  ">
        <h2 className="text-white text-2xl sm:text-5xl font-bold">{movie?.title}</h2>
        <p className="text-white sm:text-2xl line-clamp-2">{movie?.overview}</p>
        <Button className="z-10 sm:text-base text-white" size="lg">Watch Now</Button>
      </div>
    </div>
  );
};

export default MovieBanner;
