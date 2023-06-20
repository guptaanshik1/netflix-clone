import BannerComponent from "./components/Banner/BannerComponent";
import Navbar from "./components/Navbar/Navbar";
import { Rows } from "./components/Rows";

function App() {
  return (
    <div>
      <Navbar />
      <BannerComponent />
      <Rows />
    </div>
  );
}

export default App;
