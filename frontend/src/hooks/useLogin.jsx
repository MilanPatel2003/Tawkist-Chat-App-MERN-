import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuthContext();

  const login = async ({ userName, password }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("chat-app-token", JSON.stringify(data.token));
        setToken(data.token);
        toast.success(data.message);
      } else {
        toast.error(
          data.extraDetails || data.message || data.error || "Login failed"
        );
      }
    } catch (error) {
      // toast.error(error);
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
