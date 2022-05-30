import React from "react";
import "./upload.scss";
import publish from "../../assets/Images/Icons/publish.svg"
import { Link } from "react-router-dom";


const Upload = () => {
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__video-container">
                    <h2 className="upload__video-container--title">VIDEO THUMBNAIL</h2>
                    <div className="upload__video-container--video"></div>
                </div>
                <div className="upload__text-container">
                    <div className="upload__text-container--up">
                        <h5 className="upload__text-container--subtitle">TITLE YOUR VIDEO</h5>
                        <textarea name="name" cols="28" rows="1" className="upload__text-container--textarea--up" placeholder="Add a title to your video"></textarea>
                    </div>
                    <div className="upload__text-container--bottom">
                        <h5 className="upload__text-container--subtitle">ADD A VIDEO DESCRIPTION</h5>
                        <textarea name="name" cols="28" rows="4" className="upload__text-container--textarea--bottom" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className="upload__button-container">
                        <Link to ="/" className="upload__button-container--link" > 
                        <button className="upload__button-container--button"><img src={publish} alt="add publish" className="upload__button-container--publish"></img><div className="upload__button-container--text">PUBLISH</div></button>
                        </Link>
                        <button className="upload__button-container--cancel">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Upload;