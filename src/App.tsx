import "./App.css";
import { AuthProvider } from "./provider/AuthProvider";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer position="top-center" pauseOnHover />
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
