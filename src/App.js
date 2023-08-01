import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart/Cart";

import { Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/Shop_context";

function App() {
  return (
    <>
      <ShopContextProvider>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Contact />
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
