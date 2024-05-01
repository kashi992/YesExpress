import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    const storedExpiration = localStorage.getItem("authExpiration");

    if (storedAuth && storedExpiration) {
      const currentTime = new Date().getTime();
      const expirationTime = new Date(storedExpiration).getTime();

      if (currentTime < expirationTime) {
        return JSON.parse(storedAuth);
      }
    }

    return {};
  });

  useEffect(() => {
    if (Object.keys(auth).length > 0) {
      const expirationTime = new Date(new Date().getTime() + 3600000);
      localStorage.setItem("auth", JSON.stringify(auth));
      localStorage.setItem("authExpiration", expirationTime.toISOString());
    } else {
      localStorage.removeItem("auth");
      localStorage.removeItem("authExpiration");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
