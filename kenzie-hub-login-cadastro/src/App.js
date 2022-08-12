import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import MainRoutes from "./routes";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <MainRoutes></MainRoutes>
      </div>
    </AuthProvider>
  );
}

export default App;
