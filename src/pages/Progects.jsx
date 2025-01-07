import React from "react";
import { useCollektion } from "../hooks/useCollektion";

function Progects() {
  const { document } = useCollektion("users");
  console.log(document);
  return <div>Progects</div>;
}

export default Progects;
