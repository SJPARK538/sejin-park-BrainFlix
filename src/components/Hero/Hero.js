import React from "react";
import "./hero.scss"
import videoDetails from '../../data/video-details.json'



const Hero = (props) => {
    const mainContentId = props.mainDisplayId
    const mainContent = videoDetails.find(video => video.id === mainContentId)
    return(
        <div className="hero">
            <video className="hero__video" poster={mainContent.image}  duration={mainContent.duration} type="video/mp4" controls>
            </video>
        </div>
    )
}

export default Hero;