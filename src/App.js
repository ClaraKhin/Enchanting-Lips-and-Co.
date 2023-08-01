import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./components/Contact/Contact";
import Cart from "../src/Pages/Cart/Cart";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/Shop_context";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Contact />
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
