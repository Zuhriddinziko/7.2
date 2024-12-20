import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
export function useLogin() {
  const loginWithEmailAndPassword = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { loginWithEmailAndPassword };
}
