import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

// uuid
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";

export function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = async (displayName, email, password) => {
    let res = await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL:
            "https://api.dicebear.com/9.x/adventurer/svg?seed=" + uuid(),
        });
        const user = userCredential.user;
        await setDoc(doc(db, "users", res.user.uid), {
          displayName: res.user.displayName,
          id: res.user.uid,
          online: true,
        });
        dispatch(login(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return { registerWithEmailAndPassword };
}
