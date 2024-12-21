import React from "react";
import { toast } from "react-toastify";
import { authReadyAct } from "../app/features/userSlice";
import imag from ".././assets/image2.jpg";

function Navbar() {
  const logoutSite = () => {
    return toast("Do you really want to leave?");
  };
  return (
    <div className="flex flex-col w-96 min-h-svh max-h-svh bg-stone-400 shadow-lg shadow-slate-600 p-8 fixed text-slate-50">
      <div className=" flex flex-col gap-64 items-center ">
        <div className="flex flex-row">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div>2</div>
        <div>
          <button className="btn btn-accent">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
