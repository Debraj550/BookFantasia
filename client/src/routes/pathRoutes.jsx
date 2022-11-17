import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../componenets/Signin";
import Signup from "../componenets/Signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SellBook from "../pages/SellBook";
import Signout from "../componenets/Signout";
import Engineering from "../componenets/catergory/Engineering";
import Stories from "../componenets/catergory/Stories";

const pathRoutes = () => {
  //const isLoggedin = window.localStorage.getItem("token");
  const isLoggedin = true;
  console.log(isLoggedin);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/Home" />}></Route>
      <Route path="/Home" element={<Home />}>
        <Route
          exact
          path="Engineering"
          element={<Engineering props={{ category: "engineering" }} />}
        ></Route>
        <Route
          exact
          path="Stories"
          element={<Stories category="stories" />}
        ></Route>
      </Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/signin" element={<Signin />}></Route>
      <Route exact path="/signout" element={<Signout />}></Route>
      <Route
        exact
        path="/SellBook"
        element={isLoggedin ? <SellBook /> : <Signin />}
      ></Route>
      <Route
        exact
        path="/Cart"
        element={isLoggedin ? <Cart /> : <Signin />}
      ></Route>
      <Route
        path="*"
        element={
          <div>
            <h2 style={{ height: "80vh" }}>404 Page not found</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default pathRoutes;
