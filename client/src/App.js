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
        <Header />
        {pathRoutes}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
