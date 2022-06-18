import React from "react";
import "./Hero.scss"
import pause from "../../assets/Images/Icons/pause.svg"
import play from "../../assets/Images/Icons/play.svg"
import fullscreen from "../../assets/Images/Icons/fullscreen.svg"
import volumeOff from "../../assets/Images/Icons/volume_off.svg"
import volumeup from "../../assets/Images/Icons/volume_up.svg"
import scrub from "../../assets/Images/Icons/scrub.svg"


const Hero = ({hero}) => {
        return(
            <div key ={hero.id} className="hero">
                <video  className="hero__video" poster={hero.image}  type="video/mp4" ></video>
                <div className="hero__video-info">
                    <div className="hero__video-play">
                        <img src={play}  alt="play button" className="hero__video-play--button"></img>
                    </div>
                    <div className="hero__video-duration">
                        <img src={scrub} alt="scrub" className="hero__video-duration--scrub"></img>
                        <div className="hero__video-duration--bar"></div>
                        <div className="hero__video-duration--button">0:00/{hero.duration}</div>
                    </div>
                    <div className="hero__video-screen">
                        <img src={fullscreen} alt ="full screen" className="hero__video-screen--button"></img>
                        <img src={volumeup} alt="volumeup button" className="hero__video-screen--volumeup"></img>
                    </div>
                </div>

            </div>
        );
    
}

export default Hero;