import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function MainLayout() {
  
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
