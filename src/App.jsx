import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navabar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

export default function App() {

  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>: <></>}
      <div className="app">
        <div className="nav">
          <Navbar setShowLogin={setShowLogin}/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
