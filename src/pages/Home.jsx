import { Link } from "react-router-dom";
import { useCollektion } from "../hooks/useCollektion";
import { useState } from "react";
import ProjectFilter from "../components/ProjectFilter";
import { useSelector } from "react-redux";
function Home() {
  const { document } = useCollektion("Projects");
  const { user } = useSelector((store) => store.user);

  const [filter, setFilter] = useState("all");
  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const projects = document
    ? document.filter((doc) => {
        switch (filter) {
          case "all":
            return true;
          case "mine":
            return true;
          case "frontent":
            return doc.selecttuz == filter;
          case "backend":
            return doc.selecttuz == filter;
          case "smm":
            return doc.selecttuz == filter;
          case "marketing":
            return doc.selecttuz == filter;
        }
      })
    : null;
  return (
    <div className="  gap-4 w-auto max-h-screen overflow-y-auto p-5 bg-slate-50">
      {projects ? (
        <h2 className="text-5xl font-serif m-11 text-black text-center">
          you projects{" "}
        </h2>
      ) : (
        <div className="m-auto flex justify-center flex-col gap-5 mt-14 bg-white p-10 rounded-lg text-black text-3xl">
          <h2 className="flex justify-center">No Projects</h2>
          <Link to={"/create"} className="btn btn-secondary">
            Bake went
          </Link>
        </div>
      )}
      <ProjectFilter changeFilter={changeFilter} />

      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-auto">
        {projects &&
          projects.map((doc) => {
            // console.log(doc);
            return (
              <Link
                to={`/aboute/${doc.id}`}
                key={doc.id}
                className="card drop-shadow-2xl bg-base-100 w-72 p-2 shadow-xl text-black "
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-warning">
                      Project
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">
                      {/* {doc.dueTo} */}
                    </div>
                  </div>
                </div>
                <div className="card-body p-2">
                  <h2 className="card-title flex justify-center">{doc.name}</h2>
                  <p className="overflow-y-auto h-[150px]">{doc.description}</p>
                  {/* <p>{doc.dueTo}</p> */}
                  <b>{doc.selecttuz}</b>
                  <hr className=" drop-shadow-2xl" />
                  <div></div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
