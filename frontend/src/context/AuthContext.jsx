import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("chat-app-token")) || null
  );
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};
