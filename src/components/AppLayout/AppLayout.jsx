import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";

export default function AppLayout(admin = false) {
  return (
    <div className="grid grid-cols-[14rem_1fr] ">
      <SideBar admin={admin} />
      <div className="bg-white h-[100vh] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
