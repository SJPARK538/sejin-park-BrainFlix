import React from "react";
import publish from "../../assets/Images/Icons/publish.svg"


const Upload = () => {
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__video-container">
                    <h2 className="upload__video-cotainer--title">VIDEO THUMBNAIL</h2>
                    <div className="uplosd__video-container--video"></div>
                </div>
                <div className="upload__text-container">
                    <div className="upload__text-container--up">
                        <h5 className="upload__text-container--subtitle">TITLE YOUR VIDEO</h5>
                        <textarea name="name" cols="28" rows="5" className="upload__text-container--textarea--up" placeholder="Add a title to your video"></textarea>
                    </div>
                    <div className="upload__text-container--bottom">
                        <h5 className="upload__text-container--subtitle">ADD A VIDEO DESCRIPTION</h5>
                        <textarea name="name" cols="28" rows="1" className="upload__text-container--textarea--bottom" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className="upload__button-container">
                        <button className="upload__button-container--cancel">CANCEL</button>
                        <button className="upload__button-container--button"><img src={publish} alt="add publish" className="upload__button-container--publish"></img><div className="upload__button-container--text">PUBLISH</div></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Upload;