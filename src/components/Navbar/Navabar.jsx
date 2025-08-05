import React, { useContext, useState } from "react";
import './Navbar.css'
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export default function Navbar({setShowLogin}) {

    const[menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext);

    return(
        <div className="navbar">
           <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
            <ul className="navbar_menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>
                    home
                </Link>
                <a href="#explore_menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>
                    menu
                </a>
                <a href="#app_download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>
                    mobile-app
                </a>
                <a href="#footer    " onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>
                    contact us
                </a>
            </ul>
            <div className="navbar_right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar_search_icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    );
}