import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export function useLoguot() {
  const auth = getAuth();
  const loguot = () => {
    signOut(auth)
      .then(() => {
        toast.success("you go Home");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return { loguot };
}
