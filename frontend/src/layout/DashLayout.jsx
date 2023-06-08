import { Outlet } from "react-router-dom";
import DashNavbar from "../components/dashboard/DashNavbar";

export default function DashLayout() {
  return (
    <section>
      <DashNavbar />
      <Outlet />
    </section>
  );
}
