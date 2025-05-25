
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}
