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
    <div className="flex  bg-gray-800 items-center justify-between px-6 h-16">
      <div className="flex items-center gap-10">
        <MobileMenu />
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        {isAuthenticated && <WishListIcon count={wishlist.length} />}
        <AuthModal />
      </div>
    </div>
  );
};

export default Header;
