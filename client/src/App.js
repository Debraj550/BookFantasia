import React from "react";
import "./assets/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import PathRoutes from "./routes/PathRoutes.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="header-element" />
        <PathRoutes />
        <Footer className="footer-element" />
      </div>
    </Router>
  );
}

export default App;
