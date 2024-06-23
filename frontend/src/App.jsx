import { Route, Routes } from "react-router-dom";
import "./App.css";
import ThemeController from "./components/themecontroller/themeController";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
   
      <ThemeController></ThemeController>
      <div className="p4 flex h-screen justify-center items-center">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
        <Toaster/>
      </div>

    </>
  );
}

export default App;
