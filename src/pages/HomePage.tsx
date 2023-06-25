import Navbar from "../components/HomeScreen/Navbar";
import BannerComponent from "../components/HomeScreen/BannerComponent";
import { Rows } from "../components/HomeScreen/Rows";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BannerComponent />
      <Rows />
    </>
  );
};

export default HomePage;
