import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";

import MainRoutes from "./routes";
import AuthProvider from "./contexts/AuthContext";
import RequestsProvider from "./contexts/RequestsContext";

Modal.setAppElement("#root");

function App() {
  return (
    <AuthProvider>
      <RequestsProvider>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="dark"
          />
          <MainRoutes></MainRoutes>
        </div>
      </RequestsProvider>
    </AuthProvider>
  );
}

export default App;
