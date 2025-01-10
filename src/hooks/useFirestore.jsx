import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useReducer } from "react";

const document = {
  document: null,
  isPanding: false,
  error: null,
  success: true,
};

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_PANDING":
      return {
        document: null,
        isPanding: true,
        error: null,
        success: false,
      };
    case "ADD_DOCUMENT":
      return {
        document: payload,
        isPanding: false,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        document: null,
        isPanding: false,
        error: payload,
        success: false,
      };

    default: {
      return state;
    }
  }
};
function useFirestore() {
  const [state, dispatch] = useReducer(changeState, document);
  // const [isPanding, setIsPanding] = useState(false);
  // const [error, setError] = useState(null);
  const addDocument = async (collectionName, data) => {
    // setIsPanding(true);
    dispatch({ type: "IS_PANDING", payload: true });

    try {
      let newDoc = await addDoc(collection(db, collectionName), data);
      dispatch({ type: "ADD_DOCUMENT", payload: newDoc });

      // setIsPanding(false);
      toast.success("Project added!");
    } catch (error) {
      toast.error(error.code);
      dispatch({ type: "ERROR", payload: error.code });

      // setError(error.code);
    } finally {
      // setIsPanding(false);
      dispatch({ type: "IS_PANDING", payload: false });
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
  return { addDocument, state };
}

export { useFirestore };
