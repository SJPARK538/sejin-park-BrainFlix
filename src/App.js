import React from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import Main from './components/Main/Main';
import data from './data/video-details.json';
import side from './data/videos.json';
import Sidepage from "./components/SideVideo/SideVideo";




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mainVideo: data[0],
      videoList: data,
      defaults: data[0].comments,
      sideVideo: side
    }

    
  }

  
  render(){

  return (
    <>
    <Header />
    <Hero />
    <Main maindata ={this.state.mainVideo} />
    <Comments comments ={this.state.defaults}/>
    <Sidepage />
    </>
  );  
}
}

export default App;
