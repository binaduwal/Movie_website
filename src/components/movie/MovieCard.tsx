import { Link } from "react-router-dom";
import type { movieProps } from "../../types/movie";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const MovieCard = ({ movie, movieType,showDelete,onDelete }: movieProps) => {
  const poster = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  return (
    <motion.div whileHover={{ scale: 1.05,transition:{duration:0.3}}} className="relative" >
      {showDelete && onDelete && (
        <button
          className="absolute top-2 right-2 z-10 bg-black/50 cursor-pointer text-white p-1 rounded-full"
          onClick={() => onDelete(movie!.id)}
        >
          <Trash2 size={24} className="hover:text-red-500" />
        </button>
      )}
      <Link to={`/${movieType}/${movie?.id}`} className="cursor-pointer"
>
        <Card className="p-0 border-none focus:outline-none bg-black">
          <CardContent className="p-0">
            <img
              src={poster}
              alt={movie?.title}
              className="w-full  object-cover rounded-lg"
            />
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
