import { useSelector } from "react-redux";
import { useCollektion } from "../hooks/useCollektion";
import { useState } from "react";

const filter = ["all", "mine", "frontent", "backend", "marketing", "smm"];

function ProjectFilter({ changeFilter }) {
  const [handTab, setHandTab] = useState("all");
  const { document } = useCollektion("Projects");

  return (
    <div
      role="tablist"
      className="tabs text-white tabs-bordered border-gray-50 mb-4 text-4xl"
    >
      {filter.map((fil) => {
        return (
          <a
            onClick={() => {
              changeFilter(fil);
              setHandTab(fil);
            }}
            key={fil}
            role="tab"
            className={`tab font-bold ${
              handTab == fil
                ? "tab-active text-primary [--tab-bg:yellow] [--tab-border-color:orange]"
                : ""
            }`}
          >
            {fil}
          </a>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
