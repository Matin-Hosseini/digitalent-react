import "./index.css";

import { Outlet } from "react-router-dom";

import PanelSidebar from "./Sidebar";

export default function UserPanel() {
  return (
    <main>
      <div className="container my-10">
        <div className="grid-system">
          <div className="col-span-12 lg:col-span-3">
            <PanelSidebar />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
