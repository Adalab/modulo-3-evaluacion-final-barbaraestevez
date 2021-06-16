import React from "react";
import logo from "../images/Rick_and_Morty_logo.png";

function Header() {
    return(
        <header>
            <img className="logo" src={logo} alt="logo" title="logo Rick and Morty"/>
        </header>
    )
}

export default Header;