import React from "react";
import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
function Users() {
  const id = useParams();
  const { document } = useDocument("users", id);
  if (!document) {
    return <div className="loading"></div>;
  }
  console.log(document);
  return;
}

export default Users;
