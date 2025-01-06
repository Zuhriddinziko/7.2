import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, setIsPanding } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";

export function useLogin() {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (email, password, displayName) => {
    // console.log(email, password);
    let res = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setIsPanding(true));
    await setDoc(doc(db, "users", res.user.uid), {
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
      id: res.user.uid,
      online: true,
    });
    dispatch(setIsPanding(false));

    toast.success(`Welcome! ${user.displayName}`);
    dispatch("Tizimga kirildi:", login(user));
    dispatch(setIsPanding(false));
  };

  return { loginWithEmailAndPassword };
}
