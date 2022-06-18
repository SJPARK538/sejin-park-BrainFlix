import React from "react";
import "./Sidevideo.scss";
import { Link } from "react-router-dom";


const Sidepage = ({sideVideos}) => {

    const SideContent = sideVideos.map((side, id) => {
        return(
            <Link 
            className="sidevideo__selected"
            to={`/video/${side.id}`}
            key={side.id}
            >
                
            <div key={side.id} id={side.id} className="sidepage__content-container">
                <img src ={side.image} alt="video thumbnail" className="sidepage__image-container"></img>
                <div className="sidepage__text-container">
                    <div className="sidepage__text-container--title">{side.title}</div>
                    <div className="sidepage__text-container--author">{side.channel}</div>
                </div>
            </div>
            </Link>
        )
    })
    return (
    <div className="sidepage">
        <h4 className="sidepage__title">NEXT VIDEOS</h4>
        <div className="sidepage__container">{SideContent}</div>
    </div>
    )
}


export default Sidepage;

