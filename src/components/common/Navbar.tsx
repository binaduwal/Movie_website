import { Link } from "react-router-dom"
import { navLinks } from "../../constants/navLinks"
const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-5 text-lg">
      {
        navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-[#00acc1]" >
            {link.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default Navbar