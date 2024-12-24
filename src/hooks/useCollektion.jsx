import { useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
export function useCollektion(collectionName) {
  useEffect(() => {
    const q = collection(db, collectionName);
    onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot);
    });
  }, [collectionName]);
}
