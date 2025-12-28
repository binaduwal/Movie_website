import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWishListStore } from "../store/useWishListStore";
import { useAuth } from "../context/AuthContext";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { navLinks } from "../constants/navLinks";
import { WishListIcon } from "./WishListIcon";
import { Button } from "./ui/button";

const MobileMenu = () => {
  const { isAuthenticated, logout, openLogin } = useAuth();
  const wishlist = useWishListStore((state) => state.wishList);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Menu className="md:hidden cursor-pointer" size={26} />
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-4">
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.to}>
              <Link
                to={link.to}
                className="text-lg font-semibold hover:text-[#00acc1]"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}

          {isAuthenticated && (
            <SheetClose asChild>
              <Link
                to="/wishlist"
                className="flex items-center gap-2 text-lg font-semibold hover:text-[#00acc1]"
              >
                <WishListIcon count={wishlist.length} />
                <span>Wishlist</span>
              </Link>
            </SheetClose>
          )}

          {!isAuthenticated ? (
            <Button
              onClick={() => {
                setSheetOpen(false); 
                openLogin(); 
              }}
              className="w-full"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={() => {
                logout();
                setSheetOpen(false);
              }}
              className="w-full"
            >
              Logout
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
