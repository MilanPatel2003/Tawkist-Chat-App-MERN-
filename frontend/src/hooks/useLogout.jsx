import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setToken} = useAuthContext()

  const logout = async () => {
    try {
      const res = await fetch("api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json()
      if (res.ok) {
        localStorage.removeItem("chat-app-token")
        setToken(null)
        toast.success(data.message)
      }
    } catch (error) {
        toast.error(error)
        console.error("Logout error", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
