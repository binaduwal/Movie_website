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
    <div className="relative h-[70vh] overflow-hidden ">
      <motion.img
        src={backdrop}
        alt={movie?.title}
        onLoad={()=>setLoaded(true)}
        initial={{scale:1.1}}
        animate={{scale:loaded ? 1 : 1.1}}
        transition={{duration:1.5,ease:"easeOut"}}
        className="object-cover inset-0 w-full h-full bg-black/50"
      />
      <div className="absolute bottom-10 left-50 z-10 max-w-3xl space-y-2 p-6   ">
        <h2 className="text-white text-5xl font-bold">{movie?.title}</h2>
        <p className="text-white text-2xl line-clamp-2">{movie?.overview}</p>
        <Button className="z-10 text-base" variant="cyan" size="lg">Watch Now</Button>
      </div>
    </div>
  );
};

export default MovieBanner;
