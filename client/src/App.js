import React from 'react';
import './assets/App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Signup from './componenets/Signup';

function App() {
  return (
    <div className="App">
        <Header />
        <Signup ></Signup>
        <Footer />
    </div>
  );
}

export default App;
