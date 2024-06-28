import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("chat-app-token")) || null;
  });

  useEffect(() => {
    localStorage.setItem("chat-app-token", JSON.stringify(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
