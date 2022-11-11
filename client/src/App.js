import React from "react";
import "./assets/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import pathRoutes from "./routes/pathRoutes.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="header-element" />
        <section className="content">{pathRoutes}</section>
        <Footer className="footer-element" />
      </div>
    </Router>
  );
}

export default App;
