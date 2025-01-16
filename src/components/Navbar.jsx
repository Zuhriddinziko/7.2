import React from "react";
import Avatar from "./Avatar";
import { useLoguot } from "../hooks/useLoguot";
import { ImHappy2 } from "react-icons/im";
import { GrApps } from "react-icons/gr";
import { CgMoveRight } from "react-icons/cg";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { changeTheme, theme } = useTheme();
  const { loguot } = useLoguot();
  const { user } = useSelector((stote) => stote.user);
  // const dispatch = useDispatch();
  return (
    <div
      className={`  block md:flex  flex-col w-[350px]  bg-stone-400 shadow-lg shadow-slate-600  text-slate-50 justify-between items-center `}
    >
      <div className="flex flex-col items-center gap-16">
        <div className="p-16 flex items-center gap-5 flex-col">
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

      <div className="pb-9 flex flex-col gap-5">
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={changeTheme}
            // defaultChecked={false}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
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
