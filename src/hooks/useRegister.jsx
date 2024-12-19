import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
export function useRegister() {
  const registerWithEmailAndPassword = (displayName, email, password) => {
    console.log(displayName, email, password);
  };

  return { registerWithEmailAndPassword };
}
