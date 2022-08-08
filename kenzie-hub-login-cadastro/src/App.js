import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Dashboard from "./pages/dashboard";

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
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
      <Switch>
        <Route exact path="/">
          <Login setUserInfo={setUserInfo}></Login>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro></Cadastro>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard userInfo={userInfo}></Dashboard>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
