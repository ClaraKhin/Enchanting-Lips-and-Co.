import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/products" element={<Products />} />
          </Routes>
          <Contact />
          <Footer />
        </Router>

    </>
  );
}

export default App;
