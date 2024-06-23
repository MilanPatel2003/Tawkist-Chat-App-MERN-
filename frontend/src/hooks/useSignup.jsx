import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

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

      if (res.ok) {
        toast.success("Signup successful!");
        // console.log("signup successful", data);
      } else {
        toast.error(
          data.extraDetails || data.message || data.error || "Signup failed"
        );
        // console.log("Signup failed:", data);
      }
    } catch (error) {
      toast.error("An error occurred during signup refresh the page!");
      console.error("signup error", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

export default useSignup;
