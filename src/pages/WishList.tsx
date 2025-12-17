import MovieCard from "../components/movie/MovieCard";
import { useWishListStore } from "../store/useWishListStore";

export const WishList = () => {
  const wishList = useWishListStore((state) => state.wishList);
  const removeFromWishList = useWishListStore((state) => state.removeFromWishList);
  console.log(wishList, "wishlist");
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {wishList.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {wishList.map((item) => (
            <MovieCard
              key={item.id}
              movie={{
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                
              }}
              showDelete={true}
              onDelete={removeFromWishList}
            />
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};
