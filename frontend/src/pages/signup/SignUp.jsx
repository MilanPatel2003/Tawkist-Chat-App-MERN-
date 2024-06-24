import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [fields, setfields] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signUp } = useSignup();
  const handleCheckbox = (gender) => {
    setfields({ ...fields, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(fields);
    console.log(fields);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-primary"> Tawkist</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-primary">
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={fields.fullName}
              onChange={(e) =>
                setfields({ ...fields, fullName: e.target.value })
              }
              placeholder="Enter Full Name"
              className="w-full input bg-transparent focus-within:border-primary text-white h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-primary">
                Username
              </span>
            </label>
            <input
              type="text"
              value={fields.userName}
              onChange={(e) =>
                setfields({ ...fields, userName: e.target.value })
              }
              placeholder="Enter Usename"
              className="w-full input bg-transparent focus-within:border-primary text-white h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-primary">
                Password
              </span>
            </label>
            <input
              type="password"
              value={fields.password}
              onChange={(e) =>
                setfields({ ...fields, password: e.target.value })
              }
              placeholder="Enter Password"
              className="w-full input bg-transparent focus-within:border-primary text-white h-10"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-primary">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              value={fields.confirmPassword}
              onChange={(e) =>
                setfields({ ...fields, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              className="w-full input bg-transparent focus-within:border-primary text-white h-10"
              autoComplete="off"
            />
          </div>

          <Link
            className="text-sm hover:underline hover:text-primary text-slate-400 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>
          <GenderCheckbox
            onCheckboxChange={handleCheckbox}
            selectedValue={fields.gender}
          ></GenderCheckbox>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-primary hover:bg-opacity-10 text-white disabled={loading}">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
