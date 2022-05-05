import React from "react";
import "./hero.scss"
import video from "../../assets/video/main_video.mp4"
import poster from "../../assets/Images/poster.jpeg"



const Hero = () => {
    return(
        <div className="hero">
            <video className="hero__video" poster={poster} src={video} type="video/mp4" controls>
            </video>
        </div>
    )
}

export default Hero;