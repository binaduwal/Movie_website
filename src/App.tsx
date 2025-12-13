import "./App.css";
import { AuthProvider } from "./provider/AuthProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
