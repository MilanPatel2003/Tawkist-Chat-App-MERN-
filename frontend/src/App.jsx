import "./App.css";
import ThemeController from "./components/themecontroller/themeController";
import Home from "./pages/home/Home"
function App() {
  return <>
  <ThemeController></ThemeController>
  <div className="p4 flex h-screen justify-center items-center">
   <Home></Home>
  </div>
  </>;
}

export default App;
