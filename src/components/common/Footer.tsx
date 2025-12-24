import { Link } from "react-router-dom";
import { footer } from "../../constants/footer";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="p-3 text-lg bg-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex gap-2">
          <Logo />
          <span className="leading-relaxed text-gray-300">
            MovieApp - Free movies online, here you can watch movies online in
            high quality for free without annoying of advertising, just come and
            enjoy your movies online. fmovie, fmovies, bmovies Disclaimer: This
            site does not store any files on its server. All contents are
            provided by non-affiliated third parties.
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 ">
          {footer.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold mb-2 uppercase text-primary">{item.title}</h3>
              <div className="flex flex-col gap-1">
                {item.links.map((link) => (
                  <Link key={link.name} to={link.href} className="hover:underline">{link.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
