import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ThemeController from "./components/themecontroller/themeController";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { token } = useAuthContext();
  return (
    <>
      <ThemeController></ThemeController>
      <div className="p4 flex h-screen justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/signup"
            element={token ? <Navigate to="/" /> : <SignUp />}
          ></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
