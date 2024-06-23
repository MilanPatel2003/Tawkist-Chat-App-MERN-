import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-primary"> Tawkist</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-primary">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input h-10 bg-transparent focus-within:border-primary text-white"
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
              placeholder="Enter Password"
              className="w-full input h-10 bg-transparent focus-within:border-primary text-white"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-primary text-slate-400 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-primary hover:bg-opacity-10 text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
