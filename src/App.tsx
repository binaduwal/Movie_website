import "./App.css";
import { AuthProvider } from "./provider/AuthProvider";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer position="top-center" pauseOnHover />
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
