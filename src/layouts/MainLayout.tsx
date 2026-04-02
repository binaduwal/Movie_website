import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../utils/ScrollToTop";

export default function MainLayout() {
  
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <ScrollToTop/>
      <div className="pb-4">
      <Header />
      </div>
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
