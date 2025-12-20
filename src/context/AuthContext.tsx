import { createContext, useContext } from "react";
import type { User } from "../provider/AuthProvider";
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  loading?: boolean;
  isAuthenticated?: boolean;
  authModalView?: "login" | "register";
  openLogin: () => void;
  openRegister: () => void;
  closeAuthModal: () => void;

  
}

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
