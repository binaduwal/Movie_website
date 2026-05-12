import { AuthModal } from "../../auth/AuthModal";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useAuth } from "../../context/AuthContext";
import { useWishListStore } from "../../store/useWishListStore";
import { WishListIcon } from "../WishListIcon";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const wishlist = useWishListStore((state) => state.wishList);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between 
      bg-black/60 backdrop-blur-md border border-white/10 
      rounded-2xl px-6 h-16 shadow-lg">

        <div className="flex items-center gap-8">
          <MobileMenu />
          <Logo />
          <Navbar />
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />

          {isAuthenticated && (
            <WishListIcon count={wishlist.length} />
          )}

          <AuthModal />
        </div>
      </div>
    </header>
  );
};

export default Header;