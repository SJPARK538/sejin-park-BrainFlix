import React from "react";
import views from "../../assets/Images/Icons/views.svg"
import likes from "../../assets/Images/Icons/likes.svg"


const Main = ({maindata}) => {
    const Maincontent = [maindata].map((data, index) => {
        return(
            <div key={index} className="main">
                <div className="main__head-container">
                    <h1 className="main__title">{data.title}</h1>
                    <div className="main__info-container">
                        <h2 className="main__info-container--author">{data.channel}</h2>
                        <h2 className="main__info-container--date">{new Date(data.timestamp).toLocaleDateString()}</h2>
                    </div>
                    <div className="main__views-likes-container">
                        <div className="main__views-container">
                            <img className="main__views-icon" alt="brainflix views icon" src={views}></img>
                            <h2 className="main__views">{data.views}</h2>
                        </div>
                        <div className="main__likes-container">
                            <img className="main__likes-icon" alt="brainflix views icon" src={likes}></img>
                            <h2 className="main__likes">{data.likes}</h2>
                        </div>
                    </div>
                </div>
                <div className="main__description-container">
                    <p className="main__description-container--content">{data.description}</p>
                </div>
            </div>
        )  
    })
    return <div>{Maincontent}</div>
}

export default Main;