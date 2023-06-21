import { Route, Routes } from "react-router-dom";
import BannerComponent from "./components/Banner/BannerComponent";
import Navbar from "./components/Navbar/Navbar";
import { Rows } from "./components/Rows";
import HomePage from "./pages/HomePage";

function App() {
  const user = null;
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
