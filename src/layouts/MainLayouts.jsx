import { Outlet } from "react-router-dom";

function MainLayouts() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayouts;
