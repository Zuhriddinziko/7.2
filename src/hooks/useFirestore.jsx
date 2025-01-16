import { addDoc, collection, doc, documentId } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { useState } from "react";
// import { useReducer } from "react";

// const document = {
//   document: null,
//   isPanding: false,
//   error: null,
//   success: true,
// };

// // const changeState = (state, action) => {
// const { type, payload } = action;
// switch (type) {
//   case "IS_PANDING":
//     return {
//       document: null,
//       isPanding: true,
//       error: null,
//       success: false,
//     };
//   case "ADD_DOCUMENT":
//     return {
//       document: payload,
//       isPanding: false,
//       error: null,
//       success: true,
//     };
//   case "ERROR":
//     return {
//       document: null,
//       isPanding: false,
//       error: payload,
//       success: false,
//     };

//   default: {
//     return state;
//   }
// }
// // };
function useFirestore(collectionName) {
  // const [state, dispatch] = useReducer(changeState, document);
  const [isPanding, setIsPanding] = useState(false);
  // const [error, setError] = useState(null);
  const addDocument = async (collectionName, data) => {
    setIsPanding(true);
    // dispatch({ type: "IS_PANDING", payload: true });

    try {
      await addDoc(collection(db, collectionName), data);
      // dispatch({ type: "ADD_DOCUMENT", payload: newDoc });
      // setIsPanding(false);
      toast.success("Project added!");
    } catch (error) {
      toast.error(error.code);
      // dispatch({ type: "ERROR", payload: error.code });

      // setError(error.code);
    } finally {
      setIsPanding(false);
      // dispatch({ type: "IS_PANDING", payload: false });
    }
  };
  // const deleteProject = () => {
  //   setIsPanding(true);
  //   setIsPanding(false);
  // };
  const upDataProject = async (document, id) => {
    setIsPanding(true);
    const docRef = doc(db, collectionName, id);
    await upDateDoc(docRef, document);
    setIsPanding(false);
  };
  return { addDocument, upDataProject, isPanding };
}

export { useFirestore };
