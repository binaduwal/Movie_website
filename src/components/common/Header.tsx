import { UserRound } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { Button } from "../ui/button";
import { useState } from "react";
import { LoginModal } from "../../auth/LoginModal";

const Header = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <div className="flex  bg-gray-800 items-center justify-between px-6 py-3">
      <div className="flex items-center gap-10">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <div className="flex gap-2">
          <UserRound size={22}/>
          <Button onClick={()=>setShowLogin(true)} variant="void">Login</Button>
          {showLogin && <LoginModal onClose={()=>setShowLogin(false)}/>}
        </div>
      </div>
    </div>
  );
};

export default Header;
