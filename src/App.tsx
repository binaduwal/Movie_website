import "./App.css";
import { AuthProvider } from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer position="top-center" pauseOnHover />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
