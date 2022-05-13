import React from "react";
import logo from "../../assets/Images/BrainFlix-logo.svg"
import avarta from "../../assets/Images/avartar.jpg"
import "./header.scss"



const Header = () => {
    return (
        <header className="header">
            <div className ="header__logo-container">
                <a href="index.html"><img clsss="header__logo" alt ="brainflix logo"src ={logo}></img></a>
            </div>
            <div className="header__search-container">
                <input type ="text" class="header__search" placeholder="Search"></input>
                <div className="header__image-container">
                    <img src={avarta} className="header__image" img alt="avarta image"></img>
                </div>
            </div>
            <div className="header__upload-container">
                <button className="header__upload">UPLOAD</button>
            </div>
            <img src={avarta} className="header__avarta" img alt="avarta image"></img>
            
        </header>
    )
}

export default Header;