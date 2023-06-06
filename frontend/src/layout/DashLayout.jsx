import { Outlet } from "react-router-dom";

export default function DashLayout() {
  return (
    <section>
      <div>DashLayout</div>
      <Outlet />
    </section>
  );
}
