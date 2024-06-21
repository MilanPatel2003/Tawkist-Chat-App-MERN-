import "./App.css";
import ThemeController from "./components/themeController";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return <>
  <ThemeController></ThemeController>
  <div className="p4 flex h-screen justify-center items-center">
    {/* <Login></Login> */}
   <SignUp></SignUp>
  </div>
  </>;
}

export default App;
