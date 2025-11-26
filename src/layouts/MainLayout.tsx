import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
