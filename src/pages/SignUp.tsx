const SignUp = () => {
  const signUpInputClass =
    "outline-none h-8 mb-[14px] text-black rounded-[5px] py-2 px-4";

  return (
    <div
      className="max-w-[600px] mx-auto p-[70px]"
      style={{ background: "rgba(0, 0, 0, 0.85)" }}
    >
      <form className="grid flex-col">
        <h1 className="text-left mb-6">Sign In</h1>
        <input className={signUpInputClass} placeholder="Email" type="email" />
        <input
          className={signUpInputClass}
          placeholder="Password"
          type="password"
        />
        <button
          type="submit"
          className="py-3 px-5 text-base color-[#ffffff] rounded-[5px] bg-[#e50914] mt-5 font-semibold border-none cursor-pointer"
        >
          Sign In
        </button>

        <h4 className="text-left mb-6">
          <span className="text-gray-500">New to Netflix?</span>{" "}
          <span className="hover:cursor-pointer hover:underline">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
