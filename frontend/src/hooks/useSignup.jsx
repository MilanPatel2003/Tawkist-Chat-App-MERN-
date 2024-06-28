import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuthContext();

  const signUp = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Signup successful!");
        localStorage.setItem("chat-app-token", JSON.stringify(data));
        setToken(data);
        // console.log("signup successful", data);
      } else {
        toast.error(
          data.extraDetails || data.message || data.error || "Signup failed"
        );
        // console.log("Signup failed:", data);
      }
    } catch (error) {
      // toast.error(error);
      console.error("signup error", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

export default useSignup;
