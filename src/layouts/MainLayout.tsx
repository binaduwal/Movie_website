import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function MainLayout() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
