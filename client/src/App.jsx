import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import WebSite from "./Website";
import Admin from "./Admin"
class App extends Component {
  render() {
    return (

      <div className="App">

        <Router>
          <div>

            <Switch>
              <Route path='/Admin' component={Admin} />
              <Route path='/' component={WebSite} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
