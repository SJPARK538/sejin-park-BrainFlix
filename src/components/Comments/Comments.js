import React from "react";
import avarta from "../../assets/Images/avartar.jpg"
import videoDetails from '../../data/video-details.json'
import comment from "../../assets/Images/Icons/add_comment.svg"
import "./comments.scss"



const Comments = (props) => {
        const mainContentId = props.mainDisplayId
        const mainContent = videoDetails.find(video => video.id === mainContentId)
        
    const Defaults = mainContent.comments.map((comment, index) => {
        return (    
        <div key={index}  className="comments__default-container">
            <div className="comments__default-image-container"></div>
            <div className="comments__default-content-container">
                <div className="comments__content-header">
                    <h3 className="comments__content-header--name">{comment.name}</h3>
                    <h3 className="comments__content-header--date">{new Date(comment.timestamp).toLocaleDateString()}</h3>
                </div>
                <div className="comments__content-textarea">{comment.comment}</div>
            </div>
        </div>
        )
    })

    return(
        <div className="comments">
            <h3 className="comments__title" >3 Comments</h3>
            <form className="comments__input-container">
                <img src={avarta} alt="comment avarta" className="comments__image"></img>
                <div className="comments__text-container">
                    <h5 className="comments__text-container--subtitle">JOIN THE CONVERSATION</h5>
                    <textarea name="name" cols="28" rows="5" className="comments__text-container--textarea" placeholder="Add a new comment"></textarea>
                    <div className="comments__text-container--button-container">
                        <button className="comments__text-container--button"><img src={comment} alt="add comment" className="comments__text-container--button-add"></img><div className="comments__text-container--button-text">COMMENTS</div></button>
                    </div>
                </div>
            </form>
            <div className="comments__default">{Defaults}</div>
        </div>
    )
}

export default Comments;

