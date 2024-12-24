import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
export function useCollektion(collectionName) {
  const [document, setDocument] = useState(null);
  useEffect(() => {
    const q = collection(db, collectionName);
    onSnapshot(q, (querySnapshot) => {
      const uf = [];
      querySnapshot.forEach((snapshot) => {
        uf.push({ id: snapshot.id, ...snapshot.data() });
      });
      setDocument(uf);
    });
  }, [collectionName]);
  return { document };
}
