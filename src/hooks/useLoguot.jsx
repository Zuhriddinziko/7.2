import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

export function useLoguot() {
  const { user } = useSelector((store) => store.user);
  const auth = getAuth();
  const loguot = async () => {
    let ref = doc(db, "users", user.uid);
    await updateDoc(ref, {
      online: false,
    });
    signOut(auth)
      .then(() => {
        toast.success("see you again");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.massage);
      });
  };
  return { loguot };
}
