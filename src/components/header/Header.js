import React from "react";
import logo from "../../assets/Images/BrainFlix-logo.svg"
import searchIcon from "../../assets/Images/Icons/search.svg"
import uploadIcon from "../../assets/Images/Icons/upload.svg"


const Header = () => {
    return (
        <header class="header">
            <div class ="header__logo-container">
                <a href="index.html"><img clsss="header__logo" alt ="brainflix logo"src ={logo}></img></a>
            </div>
            <div class="header__search-container">
                <img class="header__search-icon" alt = "brainflix search icon" src={searchIcon}></img>
                <h4 class= "header__search">Search</h4>
            </div>
            <div class="header__upload-container">
                <img class="header__upload-icon" alt = "brainflix upload icon" src={uploadIcon}></img>
                <h4 class ="header__upload">UPLOAD</h4>
            </div>
            <div class="header__upload-container--avarta"></div>
        </header>
    )
}

export default Header;