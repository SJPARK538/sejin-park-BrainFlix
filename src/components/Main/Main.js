import React from "react";
import views from "../../assets/Images/Icons/views.svg"
import likes from "../../assets/Images/Icons/likes.svg"
import "./main.scss"

const Main = ({mainDisplayId}) => {

    const MainContent = mainDisplayId.map((object,id)=>{
        return(
            <div key={object.id} className="main">
                <h1 className="main__title">{object.title}</h1>
                <div className="main__head-container">
                    <div className="main__info-container">
                        <h2 className="main__info-container--author">By {object.channel}</h2>
                        <h2 className="main__info-container--date">{new Date(object.timestamp).toLocaleDateString()}</h2>
                    </div>
                    <div className="main__views-likes-container">
                        <div className="main__views-container">
                            <img className="main__views-icon" alt="brainflix views icon" src={views}></img>
                            <h2 className="main__views">{object.views}</h2>
                        </div>
                        <div className="main__likes-container">
                            <img className="main__likes-icon" alt="brainflix views icon" src={likes}></img>
                            <h2 className="main__likes">{object.likes}</h2>
                        </div>
                    </div>
                </div>
                <div className="main__description-container">
                    <p className="main__description-container--content">{object.description}</p>
                </div>
            </div>
        ); 
        });
    
    return <div>{MainContent}</div>
};

export default Main;

