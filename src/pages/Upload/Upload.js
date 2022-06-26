import React from "react";
import "./Upload.scss";
import publish from "../../assets/Images/Icons/publish.svg"
import axios from "axios";
import travel from "../../assets/Images/travel.jpg"



class Upload extends React.Component {
    state = {
        video: []
    }

    componentDidMount(){
        axios
        .get("http://localhost:8080/api/videos")
        .then(response =>{
            this.setState({
                video:response.data
            })
        } )
    }

    uploadForm = event => {
        event.preventDefault();
        axios
        .post("http://localhost:8080/api/videos",{
            title: event.target.title.value,
            channel: event.target.channel.value,
            description: event.target.description.value,
            image: travel,
            views: "12",
            likes: "5",
            timestamp: new Date().toLocaleDateString(),
            comments: []
        })
 
        .then(response => {
            this.props.history.push(`/video/${response.data}`)
        })
    }

    render(){
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form onSubmit={this.uploadForm} className="upload__container">
                <div className="upload__video-container">
                    <h2 className="upload__video-container--title">VIDEO THUMBNAIL</h2>
                    <div className="upload__video-container--video"></div>
                </div>
                <div className="upload__text-container">
                    <div className="upload__text-container--up">
                        <h5 className="upload__text-container--subtitle">TITLE YOUR VIDEO</h5>
                        <textarea name="title" cols="28" rows="1" className="upload__text-container--textarea--up" placeholder="Add a title to your video"></textarea>
                    </div>
                    <div className="upload__text-container--bottom">
                        <h5 className="upload__text-container--subtitle">ADD A VIDEO DESCRIPTION</h5>
                        <textarea name="description" cols="28" rows="4" className="upload__text-container--textarea--bottom" placeholder="Add a description to your video"></textarea>
                    </div>
                    <input type="hidden" name="channel" value ="Sejin Park" />
                    <div className="upload__button-container">
                        <button  className="upload__button-container--button"><img src={publish} alt="add publish" className="upload__button-container--logo"></img><div className="upload__button-container--text">PUBLISH</div></button>
                        <button className="upload__button-container--cancel">CANCEL</button>
                    </div>
                </div>
            </form>
        </div>
        
    )
}
}

export default Upload;