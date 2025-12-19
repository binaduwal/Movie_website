import { Heart } from "lucide-react";
import { AuthModal } from "../../auth/AuthModal";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex  bg-gray-800 items-center justify-between px-6 py-3">
      <div className="flex items-center gap-10">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        {
          isAuthenticated &&
          <Link to="/wishlist" className="text-white hover:text-red-500">
          <Heart />
          </Link>
        }
        <AuthModal/>
      </div>
    </div>
  );
};

export default Header;
