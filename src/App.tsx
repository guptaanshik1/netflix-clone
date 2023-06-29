import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth?.uid,
            email: userAuth?.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <Routes>
        {!user ? (
          <Route path={"/login"} element={<Login />} />
        ) : (
          <Route path={"/"} element={<HomePage />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
