import React from "react";
import views from "../../assets/Images/Icons/views.svg"
import likes from "../../assets/Images/Icons/likes.svg"
import "./main.scss"

const Main = ({main}) => {
        return(
            <div key={main.id} className="main">
                <h1 className="main__title">{main.title}</h1>
                <div className="main__head-container">
                    <div className="main__info-container">
                        <h2 className="main__info-container--author">By {main.channel}</h2>
                        <h2 className="main__info-container--date">{new Date(main.timestamp).toLocaleDateString()}</h2>
                    </div>
                    <div className="main__views-likes-container">
                        <div className="main__views-container">
                            <img className="main__views-icon" alt="brainflix views icon" src={views}></img>
                            <h2 className="main__views">{main.views}</h2>
                        </div>
                        <div className="main__likes-container">
                            <img className="main__likes-icon" alt="brainflix views icon" src={likes}></img>
                            <h2 className="main__likes">{main.likes}</h2>
                        </div>
                    </div>
                </div>
                <div className="main__description-container">
                    <p className="main__description-container--content">{main.description}</p>
                </div>
            </div>
        ); 
};

export default Main;

