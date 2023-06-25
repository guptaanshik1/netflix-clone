import React, { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  const [signUp, setSignUp] = useState<boolean>(false);

  const handleOnSignUp = () => {
    setSignUp(true);
  };

  return (
    <div className="relative h-[100%]">
      <div
        style={{
          backgroundImage: `url('https://nyctastemakers.com/wp-content/uploads/2021/10/NYCTM-Home-Banner-39.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          className="fixed left-0 w-36 top-5 object-contain pl-5"
          alt=""
        />
        <button
          onClick={handleOnSignUp}
          className="fixed top-5 right-5 p-[10px] text-sm text-[#FFFFFF] bg-[#e50914] cursor-pointer font-semibold"
        >
          Sign in
        </button>

        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
            background: "rgba(0,0,0,0.4)",
          }}
          className="w-[100%] z-10 h-screen"
        />
      </div>

      <div className="z-10 text-white p-5 absolute top-[30%] mx-auto text-center left-0 right-0">
        {signUp ? (
          <SignUp />
        ) : (
          <>
            <h1 className="text-6xl mb-5">
              Unlimited films, TV Programmes and more.
            </h1>
            <h2 className="text-3xl font-normal mb-7">
              Watch anywhere, Cancel at anytime
            </h2>
            <h3 className="text-xl font-normal">
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className="m-5">
              <form>
                <input
                  className="p-2 outline-none h-16 w-[30%] max-w-[600px]"
                  placeholder="Email Address"
                  type="email"
                />
                <button
                  onClick={handleOnSignUp}
                  className="px-4 py-5 text-base bg-[#e50914] border-none color-[#ffffff] font-semibold cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
// px-4 py-5 text-base bg-[#e50914] border-none color-[#ffffff]
