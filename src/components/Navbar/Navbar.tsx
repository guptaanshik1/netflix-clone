import { BsGlobe2, BsFillCaretDownFill } from "react-icons/bs";
import React from "react";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div
      className={`${
        show && "bg-black"
      }  fixed top-0 p-5 w-[100%] h-[100px] z-100 ease-in duration-500`}
    >
      <div className="flex justify-between align-middle w-full">
        <img
          className="pl-5 fixed left-0 top-[25px] w-[150px] object-contain cursor-pointer"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        />
        <div className="flex justify-around align-middle w-[400px] fixed right-[20px] [w-30px]">
          <div className="flex flex-row h-[40%] self-center align-middle border-2 border-[rgb(95,95,94)] p-[8px] cursor-pointer">
            <BsGlobe2 className="self-center text-[#ffffff]" onClick />
            <select className="ml-[4px] outline-none appearance-none leading-[22px] bg-transparent text-[#ffffff]">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <BsFillCaretDownFill className="ml-[4px] self-center text-[#ffffff]" />
          </div>
          <button className="bg-[rgb(229,8,21)] h-[40%] rounded-md cursor-pointer self-center p-[4px] text-[#ffffff] font-bold w-[100px]">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
