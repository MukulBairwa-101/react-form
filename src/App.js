import React, { useContext, useEffect } from "react";
import Form from "./Components/Form/Form";
import Home from "./Components/pages/Home";
import Login from "./Components/Form/Login";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
// import axios from "axios";
function App() {
  const appContext = useContext(AppContext);
  const [authRoute, setAuthRoute] = appContext.value1;
  const [isLoggedin, setIsloggedin] = appContext.value5;
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(`/${path}`);
    if (path === "login" || path === "register") setAuthRoute(true);
    else setAuthRoute(false);
  };
  return (
    <div className="App">
      {/* {!authRoute ? ( */}
      <nav className="flex flex-between">
        <div className="logo">
          <a href="/" className="logo">
            logo
          </a>
        </div>
        <div className="nav-btns">
          <button
            className="btn btn-login  btn-auth"
            onClick={() => handleRoute("login")}
          >
            Login
          </button>
          {isLoggedin.active ? (
            <button
              className="btn btn-register  btn-auth"
              onClick={() => {
                handleRoute("login");
                setIsloggedin({
                  name: "",
                  active: false,
                });
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-register btn-auth"
              onClick={() => handleRoute("register")}
            >
              Register
            </button>
          )}
        </div>
      </nav>
      {/* ) : (
        ""
      )} */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Form />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
