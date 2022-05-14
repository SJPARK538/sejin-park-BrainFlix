import React from "react";
import logo from "../../assets/Images/BrainFlix-logo.svg"
import avarta from "../../assets/Images/avartar.jpg"
import upload from "../../assets/Images/Icons/upload.svg"
// import search from "../../assets/Images/Icons/search.svg"
import "./header.scss"

// <img src={search} alt="search video" className="header__search-logo"></img>


const Header = () => {
    return (
        <header className="header">
            <div className ="header__logo-container">
                <a href="index.html"><img className="header__logo" alt ="brainflix logo"src ={logo}></img></a>
            </div>
            <div className="header__search-container">
                <input type ="text" className="header__search" placeholder="Search"></input>
                <div className="header__image-container">
                    <img src={avarta} className="header__image"  alt="avarta"></img>
                </div>
            </div>
            <div className="header__upload-container">
                <button className="header__upload"><img src={upload} alt="logo" className="header__upload--logo"></img><div className="header__upload--text">UPLOAD</div></button>
            </div>
            <img src={avarta} className="header__avarta" alt="header avarta"></img>
            
        </header>
    )
}

export default Header;