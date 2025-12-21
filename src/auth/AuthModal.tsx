import { UserRound } from "lucide-react";
import { Button } from "../components/ui/button";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { useAuth } from "../context/AuthContext";

export const AuthModal = () => {
  const { isAuthenticated, logout,authModalView,openLogin,openRegister,closeAuthModal } = useAuth();

  return (
    <div className="flex items-center gap-1">
      <UserRound size={22} />
      
       {!isAuthenticated ? (
        <Button onClick={openLogin} variant="void">
          Login
        </Button>
      ) : ( 
        <Button onClick={logout} variant="void">
          Logout
        </Button>
      )}

     
      {authModalView === "login" && (
        <LoginModal
          onClose={closeAuthModal}
          onOpenRegister={openRegister}
        />
      )}
      {authModalView === "register" && (
        <RegisterModal
          onClose={closeAuthModal}
          onOpenLogin={openLogin}
        />
      )}
    </div>
  );
};
