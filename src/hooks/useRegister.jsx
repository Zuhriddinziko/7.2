import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
export function useRegister() {
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return { registerWithEmailAndPassword };
}
