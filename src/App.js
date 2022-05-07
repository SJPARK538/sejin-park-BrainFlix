import React from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import Main from './components/Main/Main';
import data from './data/video-details.json';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mainVideo: data[0],
      videoList : data
    }

    
  }

  
  render(){
    console.log(data)
    
  return (
    <>
    <Header />
    <Hero />
    <Main data ={this.state.mainVideo} />
    <Comments />
    </>
  );  
}
}

export default App;
