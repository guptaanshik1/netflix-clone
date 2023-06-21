import Navbar from "../components/Navbar/Navbar";
import BannerComponent from "../components/Banner/BannerComponent";
import { Rows } from "../components/Rows";

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
