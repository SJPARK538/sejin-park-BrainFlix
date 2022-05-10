import React from "react";
import avarta from "../../assets/Images/avartar.jpg"


const Comments = ({comments}) => {

    const Defaults = comments.map((comment, index) => {
        return (    
        <div key={index}  className="comments__default-container">
            <div className="comments__default-image-container">HI</div>
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
            <img src={avarta} className="comments__image"></img>
            <form className="comments__input-container">
                <div className="comments__text-container">
                    <h5 className="comments__text-container--subtitle">Join the Conversation</h5>
                    <textarea name="name" cols="50" rows="10" className="comment__text-container--textarea" placeholder="Add a new comment"></textarea>
                    <div className="comments__text-container--button-container">
                        <button className="comments__text-container--button">submit</button>
                    </div>
                </div>
            </form>
            <div className="comments__default">{Defaults}</div>
        </div>
    )
}

export default Comments;

// return (
    // <div className="comments__default-container">
    //     <div className="comments__default-image-container"></div>
    //     <div className="comments__default-content-container">
    //         <div className="comments__content-header">
    //             <h3 className="comments__content-header--name">name</h3>
    //             <h3 className="comments__content-header--date">date</h3>
    //         </div>
    //         <div className="comments__content-textarea"></div>
    //     </div>

    // </div>
// )