import { useRef } from "react";
import { ISignUpFieldsType } from "../types/signUpFieldsType";
import { signInUser, signUpUser } from "../utils/authenticator";

const SignUp = () => {
  const fieldsRefs: ISignUpFieldsType = {
    emailRef: useRef(null),
    passwordRef: useRef(null),
  };
  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = await signUpUser(fieldsRefs);
    console.log(user);
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = await signInUser(fieldsRefs);
    console.log(user);
  };

  const signUpInputClass =
    "outline-none h-8 mb-[14px] text-black rounded-[5px] py-2 px-4";

  return (
    <div
      className="max-w-[600px] mx-auto p-[70px]"
      style={{ background: "rgba(0, 0, 0, 0.85)" }}
    >
      <form className="grid flex-col">
        <h1 className="text-left mb-6">Sign In</h1>
        <input
          ref={fieldsRefs?.emailRef}
          className={signUpInputClass}
          placeholder="Email"
          type="email"
        />
        <input
          ref={fieldsRefs?.passwordRef}
          className={signUpInputClass}
          placeholder="Password"
          type="password"
        />
        <button
          onClick={signIn}
          type="submit"
          className="py-3 px-5 text-base color-[#ffffff] rounded-[5px] bg-[#e50914] mt-5 font-semibold border-none cursor-pointer"
        >
          Sign In
        </button>

        <h4 className="text-left mb-6">
          <span className="text-gray-500">New to Netflix?</span>{" "}
          <span
            onClick={register}
            className="hover:cursor-pointer hover:underline"
          >
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
