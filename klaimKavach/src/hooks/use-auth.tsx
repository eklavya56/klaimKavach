import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("klaimkavach_user");
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (name: string) => {
    localStorage.setItem("klaimkavach_user", name);
    setUser(name);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("klaimkavach_user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, login, logout };
}
