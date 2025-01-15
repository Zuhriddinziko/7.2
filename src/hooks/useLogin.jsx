import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, setIsPanding } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { validateSignupOrLoginData } from "../utils";

export function useLogin() {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (email, password) => {
    dispatch(setIsPanding(true));

    try {
      let res = await signInWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        id: res.user.uid,
        online: true,
      });

      toast.success(`Welcome! ${user.displayName}`);
      dispatch(login(user));
      dispatch(setIsPanding(false));
    } catch (error) {
      toast.error(validateSignupOrLoginData(error.code));
      toast.error(error.massage);
      dispatch(setIsPanding(false));
    }
  };

  return { loginWithEmailAndPassword };
}
