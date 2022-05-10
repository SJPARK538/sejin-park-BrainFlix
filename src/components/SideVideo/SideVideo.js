import React from "react";

const Sidepage = ({sideVideo}) => {
    const SideContent = sideVideo.map((side, index) => {
        return(
            <div key={index} className="sidepage__content-container">
                <div className="sidepage__image-container">{side.image}</div>
                <div className="sidepage__text-container">
                    <div className="sidepage__text-container--title">{side.title}</div>
                    <div className="sidepage__text-container--author">{side.channel}</div>
                </div>
            </div>
        
        )
    
    })
    return (
    <div className="sidepage__container">
        <h4 className="sidepage__title">Next Video</h4>
        <div>{SideContent}</div>
    </div>
    )
}


export default Sidepage;

