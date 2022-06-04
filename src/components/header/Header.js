import React from "react";
import logo from "../../assets/Images/BrainFlix-logo.svg"
import avarta from "../../assets/Images/avartar.jpg"
import upload from "../../assets/Images/Icons/upload.svg"
import "./header.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className ="header__logo-container">
                <Link to ="/" className="header__link"><img className="header__logo" alt ="brainflix logo"src ={logo}></img></Link>
            </div>
            <div className="header__search-container">
                <input type ="text" className="header__search" placeholder="Search"></input>
                <div className="header__image-container">
                    <img src={avarta} className="header__image"  alt="avarta"></img>
                </div>
            </div>
            <div className="header__upload-container">
                    <Link to="/upload" className="header__upload-link"><button className="header__upload"><img src={upload} alt="logo" className="header__upload--logo"></img><div className="header__upload--text">UPLOAD</div></button></Link>  
            </div>
            <div className="header__avarta-container"><img src={avarta} className="header__avarta" alt="header avarta"></img></div>
        </header>
    )
}

export default Header;