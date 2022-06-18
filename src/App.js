import React from "react";
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../src/components/Home/Home"
import Upload from "../src/components/Upload/Upload"



class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video/:id" component={Home}/>
          <Route path="/upload"  component={Upload} />
        </Switch>
      </Router>
    )
    }
  }
  
  export default App;


