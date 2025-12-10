import { Link } from "react-router-dom";
import type { movieProps } from "../../types/movie";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const MovieCard = ({ movie, movieType }: movieProps) => {
  const poster = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  return (
    <motion.div whileHover={{ scale: 1.05,transition:{duration:0.3}}} >
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
