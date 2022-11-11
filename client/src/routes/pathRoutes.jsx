import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../componenets/Signin";
import Signup from "../componenets/Signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SellBook from "../pages/SellBook";
import Engineering from "../componenets/catergory/Engineering";
import Stories from "../componenets/catergory/Stories";

const pathRoutes = (
  <Routes>
    <Route exact path="/" element={<Navigate to="/Home" />}></Route>
    <Route exact path="/Home" element={<Home />}>
      <Route exact path="Engineering" element={<Engineering />}></Route>
      <Route exact path="Stories" element={<Stories />}></Route>
    </Route>
    <Route exact path="/signup" element={<Signup />}></Route>
    <Route exact path="/signin" element={<Signin />}></Route>
    <Route exact path="/SellBook" element={<SellBook />}></Route>
    <Route exact path="/Cart" element={<Cart />}></Route>
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

export default pathRoutes;
