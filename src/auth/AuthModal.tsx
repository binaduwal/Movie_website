import { UserRound } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { useAuth } from "../context/AuthContext";

export const AuthModal = () => {
  const [view, setView] = useState<"login" | "register" | null>(null);
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex gap-2">
      <UserRound size={22} />
      
       {!isAuthenticated ? (
        <Button onClick={() => setView("login")} variant="void">
          Login
        </Button>
      ) : ( 
        <Button onClick={logout} variant="void">
          Logout
        </Button>
      )}
      {view === "login" && (
        <LoginModal
          onClose={() => setView(null)}
          onOpenRegister={() => setView("register")}
        />
      )}
      {view === "register" && (
        <RegisterModal
          onClose={() => setView(null)}
          onOpenLogin={() => setView("login")}
        />
      )}
    </div>
  );
};
