import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CodelinersList from "./components/CodelinersList";
import Codeliners from "./components/Codeliners";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div><div>
          <h1>Code Challenge Practice</h1>
          <div>
          <div>
          <Link to="/">All Codeliners</Link>
          </div>
          </div>
          </div>
          
          <Switch>
          <Route exact path="/codelines/:id" component={Codeliners} />
          <Route path="/" component={CodelinersList} />
          </Switch></div>
        </Router>
      </div>
    );
  }
}

export default App;
