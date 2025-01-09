import React from "react";
import Avatar from "./Avatar";
import { useLoguot } from "../hooks/useLoguot";
import { ImHappy2 } from "react-icons/im";
import { GrApps } from "react-icons/gr";
import { CgMoveRight } from "react-icons/cg";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { loguot } = useLoguot();
  const { user } = useSelector((stote) => stote.user);
  return (
    <div className="flex md:w-[280px] sm:w-[180px] md:text-lg flex-col w-[350px]  bg-stone-400 shadow-lg shadow-slate-600  text-slate-50 justify-between items-center ">
      <div className="flex flex-col gap-16">
        <div className="p-16">
          <Avatar user={user} />
        </div>
        <div>
          <ul className="pl-20 flex flex-col gap-3 text-xl font-bold">
            <li className="nov-item">
              <NavLink to={"/craete"}>
                <span className="flex items-center gap-2 ml-5   p-2">
                  <ImHappy2 /> Create
                </span>
              </NavLink>
            </li>
            <li className="nov-item">
              <NavLink to={"/"}>
                <span className="flex items-center gap-2 ml-5   p-2              ">
                  <GrApps /> Home
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="pb-9">
        <button
          onClick={loguot}
          className="btn btn-accent hover:text-black bg-black text-white font-bold rounded-lg shadow-lg 
           animate-pulseGlow transition-transform duration-300 hover:scale-105"
        >
          <span className="flex items-center gap-2 pl-3 p-2 ">
            <CgMoveRight /> Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
