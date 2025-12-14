import { AuthModal } from "../../auth/AuthModal";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex  bg-gray-800 items-center justify-between px-6 py-3">
      <div className="flex items-center gap-10">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <AuthModal/>
      </div>
    </div>
  );
};

export default Header;
