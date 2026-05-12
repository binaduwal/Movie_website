import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center gap-2">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.to;

        return (
          <Link
            key={link.to}
            to={link.to}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-medium 
              transition-all duration-300
              ${
                isActive
                  ? "bg-cyan-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;