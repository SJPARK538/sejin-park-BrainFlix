import React from "react";
import "./hero.scss"

const Hero = (props) => {
    return(
        <div className="hero">
            <video className="hero__video" poster={props.image}  type="video/mp4" controls>
            </video>
        </div>
    )
}

export default Hero;