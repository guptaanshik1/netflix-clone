import { ISignUpFieldsType } from "../types/signUpFieldsType";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUpUser = async (fieldsRefs: ISignUpFieldsType) => {
  const { emailRef, passwordRef } = fieldsRefs;
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      emailRef.current?.value ?? "",
      passwordRef.current?.value ?? ""
    );
    const user = userCredentials?.user;
    return user;
  } catch (error: any) {
    console.error("Error while signing up a user:", error?.message);
  }
};

export const signInUser = async (fieldsRefs: ISignUpFieldsType) => {
  const { emailRef, passwordRef } = fieldsRefs;
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      emailRef.current?.value ?? "",
      passwordRef.current?.value ?? ""
    );
    const user = userCredentials?.user;
    return user;
  } catch (error: any) {
    console.error("Error while signing in a user:", error?.message);
  }
};
