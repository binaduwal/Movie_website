import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
