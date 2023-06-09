import { Outlet } from "react-router-dom";
import DashNavbar from "../components/dashboard/DashNavbar";

export default function DashLayout() {
  return (
    <div>
      <DashNavbar />
      <Outlet />
    </div>
  );
}
