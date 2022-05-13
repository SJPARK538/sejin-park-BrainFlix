import React from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';
import Sidepage from "./components/SideVideo/SideVideo";
import data from './data/video-details.json';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mainVideoId: data[0].id


    }

  }
  changeId = (id) => {
    this.setState({mainVideoId: id})  


  }
  
  render(){

  return (
    <>
    <Header />
    <Hero mainDisplayId={this.state.mainVideoId} />
    <Main mainDisplayId={this.state.mainVideoId}/>
    <Comments  mainDisplayId={this.state.mainVideoId}/>
    <Sidepage  displayVideo={this.changeId} mainDisplayId={this.state.mainVideoId}
    />
    </>
  );  
}
}

export default App;
