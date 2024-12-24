import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";
export function useLogin() {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (email, password, displayName) => {
    // console.log(email, password);
    let res = await signInWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), {
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
      id: res.user.uid,
      online: true,
    });

    toast.success(`Welcome! ${user.displayName}`);
    dispatch("Tizimga kirildi:", login(user));
  };

  return { loginWithEmailAndPassword };
}
