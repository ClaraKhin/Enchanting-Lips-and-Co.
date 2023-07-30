import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
