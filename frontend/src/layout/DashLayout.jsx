import DashNavbar from "../components/dashboard/DashNavbar";

import { Outlet } from "react-router-dom";

export default function DashLayout() {
  return (
    <section>
      <DashNavbar />
      <Outlet />
    </section>
  );
}
