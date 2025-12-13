import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  email: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const storedUser = localStorage.getItem("user");
  setTimeout(() => {
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, 0);
}, []);

  const login = (email:string, _password:string) => {
    const fakeUser = { email };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const register = (email:string, password:string) => {
    login(email, password);
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
