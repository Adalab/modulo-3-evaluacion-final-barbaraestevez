import React from "react";
import logo from "../images/Rick_and_Morty_logo.png";

function Header() {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="logo" title="logo Rick and Morty"/>
            <h1 className="h1">Rick and Morty</h1>
        </header>
    )
}

export default Header;