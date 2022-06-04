import React from "react";
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/page/Home"
import Upload from "./pages/page/Upload"



class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video/:id" render={props => {return <Home {...props} />}}/>
          <Route path="/upload"  component={Upload} />
        </Switch>
      </Router>
    )
    }
  }
  
  export default App;


