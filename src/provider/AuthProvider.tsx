import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  email: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setTimeout(() => {
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    }, 0);
  }, []);

  const login = (email: string, password: string) => {
    const fakeUser = { email, password };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setIsAuthModalOpen(false);
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("wishList");
    setUser(null);
  };
  const register = (email: string, password: string) => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsAuthModalOpen(false);
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    loading,
 isAuthModalOpen,
    onOpenAuthModal: () => setIsAuthModalOpen(true),
    onCloseAuthModal: () => setIsAuthModalOpen(false),  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
