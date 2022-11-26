import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../componenets/Signin";
import Signup from "../componenets/Signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SellBook from "../pages/SellBook";
import Signout from "../componenets/Signout";
import ProductCategory from "../componenets/catergory/ProductCategory";
import ProductPage from "../pages/ProductPage";
import Slider from "../componenets/Slider/Slider";
import Orders from "../pages/Orders";
import PostedBooks from "../pages/PostedBooks";
import CheckoutForm from "../componenets/CheckoutForm";
import SearchResult from "../componenets/catergory/SearchResult";

const PathRoutes = () => {
  const isLoggedin = window.localStorage.getItem("token");
  //const isLoggedin = true;
  console.log(isLoggedin);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/Home" />}></Route>
      <Route path="/Home" element={<Home />}>
        <Route path="" element={<Slider />}></Route>
        <Route path=":category" element={<ProductCategory />}></Route>
      </Route>
      <Route path="/search/:search" element={<SearchResult />}></Route>
      <Route path="/Productpage/:book_id" element={<ProductPage />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/orders" element={<Orders />}></Route>
      <Route exact path="/posted_books" element={<PostedBooks />}></Route>
      <Route exact path="/signin" element={<Signin />}></Route>
      <Route exact path="/signout" element={<Signout />}></Route>
      <Route exact path="/checkout" element={<CheckoutForm />}></Route>
      <Route
        exact
        path="/SellBook"
        element={isLoggedin ? <SellBook /> : <Signin failed={true} />}
      ></Route>
      <Route
        exact
        path="/Cart"
        element={isLoggedin ? <Cart /> : <Signin failed={true} />}
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

export default PathRoutes;
