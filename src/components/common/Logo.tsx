import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-2xl hidden md:block">
      <Link to="/" className="flex items-center h-20 w-20">
        <img
          src="/logo.png"
          alt="MovieApp Logo"
          className="h-full w-full object-contain "
        />
      </Link>
    </div>
  );
};

export default Logo;
