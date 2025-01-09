import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
function useFirestore() {
  // const [isPanding, setIsPanding] = useState(false);
  // const [error, setError] = useState(null);
  const addDocument = async (collectionName, data) => {
    // setIsPanding(true);

    try {
      await addDoc(collection(db, collectionName), data);
      // setIsPanding(false);
      toast.success("Project added!");
    } catch (error) {
      toast.error(error.code);
      // setError(error.code);
    } finally {
      // setIsPanding(false);
    }
  };
  // const deleteProject = () => {
  //   setIsPanding(true);
  //   setIsPanding(false);
  // };
  // const upDataProject = () => {
  //   setIsPanding(true);
  //   setIsPanding(false);
  // };
  return { addDocument };
}

export { useFirestore };
