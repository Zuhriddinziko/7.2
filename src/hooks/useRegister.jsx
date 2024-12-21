import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

// uuid
import { v4 as uuid } from "uuid";

export function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL:
            "https://api.dicebear.com/9.x/adventurer/svg?seed=" + uuid(),
        });
        const user = userCredential.user;
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
