import React from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Comments from "../../components/Comments/Comments";
import SideVideo from "../../components/SideVideo/SideVideo";
import axios from "axios";

// API KEY "api_key": "cfddcce4-2fac-4b3f-8b69-8f2abdd9b1d9"

// let apiUrl = "https://project-2-api.herokuapp.com";
// let apiKey ="api_key=cfddcce4-2fac-4b3f-8b69-8f2abdd9b1d9";


class Home extends React.Component {
    state = {
        sideVideos: [],
        selectedVideo: {},
    };

componentDidMount(){
    axios
    .get("http://localhost:8080/api/videos")   
    .then (response =>{
        const allVideos = response.data;   
        console.log(allVideos[0].id)
        
        // if (this.props.match.params.id){
        //     axios
        //     .get (`http://localhost:8080/api/videos/${this.props.match.params.id}`) 
        //     .then(response => {
        //         let sideVideos = allVideos.filter(video => video.id !==`${this.props.match.params.id}`);     
        //         const selectedVideo= response.data;  
        //         this.setState({sideVideos, selectedVideo, allVideos});
        //     });
            
        // } else {
            
            axios
            .get(`http://localhost:8080/api/videos/${allVideos[0].id}`)
            .then( response => {
                let sideVideos = allVideos.filter(video => video.id !== `${allVideos[0].id}`);     
                const selectedVideo= response.data;  
                console.log(response.data)
                this.setState({sideVideos, selectedVideo, allVideos});
            })
        // }
 
    });
 
}

componentDidUpdate(prevProps){
    if(prevProps.match.params.id !== this.props.match.params.id){
        axios
        .get(`http://localhost:8080/api/videos/${this.props.match.params.id}`)
        .then (response => {
            const selectedVideo = response.data;
            let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
            this.setState({sideVideos, selectedVideo});
        });
    }
}

render(){
return (
    <>
    {this.state.selectedVideo ?<Hero  hero={this.state.selectedVideo}/>: null}
    {this.state.selectedVideo ?<Main  main={this.state.selectedVideo}/>: null}
    {this.state.selectedVideo ?<Comments  comments={this.state.selectedVideo.comments}/>: null}
    <SideVideo  sideVideos={this.state.sideVideos}/>
    </>
 );
}
}


export default Home;
