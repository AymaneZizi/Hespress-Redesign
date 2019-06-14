import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import "./App.css";
import WebSite from "./Website";
import Admin from "./Admin";
import LoginPage from './components/LoginPage/LoginPage';
import store from './store';
import { loadUser } from 'actions/authActions'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <div className="App">

          <Router>
            <div>

              <Switch>
                <Route path='/login' component={LoginPage} />
                <PrivateRoute path='/Admin' component={Admin} />
                <Route path='/' component={WebSite} />

              </Switch>

            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
