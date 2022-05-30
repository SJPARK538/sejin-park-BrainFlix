import React from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Comments from "../../components/Comments/Comments";
import SideVideo from "../../components/SideVideo/SideVideo";
import axios from "axios";

// API KEY "api_key": "cfddcce4-2fac-4b3f-8b69-8f2abdd9b1d9"

let apiUrl = "https://project-2-api.herokuapp.com";
let apiKey ="api_key=cfddcce4-2fac-4b3f-8b69-8f2abdd9b1d9";


class Home extends React.Component {
    state = {
        sideVideos: [],
        selectedVideo: [],
        allVideos: [],
        comments: []
    };

componentDidMount(){
    axios
    .get(`${apiUrl}/videos?${apiKey}`)    //Get all sidevideos array 
    .then (response =>{
        const allVideos = response.data;   

        axios
        .get (`${apiUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?${apiKey}`) // Get main video content info
        .then(response => {
            let sideVideos = allVideos.filter(video => video.id !=="84e96018-4022-434e-80bf-000ce4cd12b8");     //Get sidevideos except selected video   
            const selectedVideo= response.data;   //selected video (mainvideo)
            const comments = response.data.comments
            this.setState({sideVideos, selectedVideo:[selectedVideo], allVideos, comments});
        });
    });
}

componentDidUpdate(prevProps){
    if(prevProps.match !== this.props.match){
        axios
        .get(`${apiUrl}/videos/${this.props.match.params.id}?${apiKey}`)
        .then (response => {
            const selectedVideo = response.data;
            const comments=response.data.comments;
            let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
            this.setState({sideVideos, selectedVideo:[selectedVideo], comments});
        });
    }
}

render(){
return (
    <>
    <Hero hero={this.state.selectedVideo[0]} />
    <Main mainDisplayId={this.state.selectedVideo}/>
    <Comments  comments={this.state.comments}/>
    <SideVideo  sideVideos={this.state.sideVideos}/>
    </>
 );
}
}



export default Home;
