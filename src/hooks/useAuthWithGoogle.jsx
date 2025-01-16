import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";

export function useAuthWithGoogle() {
  const dispatch = useDispatch();
  const [ispanding, setIspanding] = useState(false);
  const [isConseled, setIsConseled] = useState(false);
  // console.log(ispanding);
  const provider = new GoogleAuthProvider();
  const googleAuth = async () => {
    setIspanding(true);
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      if (!isConseled) {
        await setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          photoURL: user.photoURL,
          id: user.uid,
          online: true,
        });
        dispatch(user);
      }
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  useEffect(() => {
    return () => setIsConseled(true);
  }, []);

  return { googleAuth, ispanding };
}
