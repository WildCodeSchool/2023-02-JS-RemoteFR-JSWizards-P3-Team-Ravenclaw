// Packages
import { Outlet } from "react-router-dom";

// Components
import DashNavbar from "../components/dashboard/DashNavbar";

export default function DashLayout() {
  return (
    <div>
      <DashNavbar />
      <Outlet />
    </div>
  );
}
