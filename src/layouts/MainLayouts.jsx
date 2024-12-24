import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import OnlineUser from "../components/OnlineUser";
import ima from ".././assets/image.jpg";

function MainLayouts() {
  return (
    <div
      style={{
        backgroundImage: `url(${ima})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-between text-yellow-100    bg-cover"
    >
      <Navbar />
      <main className=" w-[700px]">
        <Outlet />
      </main>
      <OnlineUser />
    </div>
  );
}

export default MainLayouts;
