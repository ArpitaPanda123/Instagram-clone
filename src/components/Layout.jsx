import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 bg-black text-white p-6">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;