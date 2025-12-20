import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  email: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authModalView, setAuthModalView] = useState<"login" | "register" | null>(null);


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
    setAuthModalView(null);
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("wishList");
    setUser(null);
    setAuthModalView(null);
  };
  const register = (email: string, password: string) => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    loading,
    authModalView,
    openLogin: () => setAuthModalView("login"),
    openRegister: () => setAuthModalView("register"),
    closeAuthModal: () => setAuthModalView(null),

   };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
