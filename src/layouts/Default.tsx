import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";
// agora tanto a Sidebar e o Outlet( Os conteúdos ) estão dentro do contexto das rotas

import "./Default.css";

export function Default() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
