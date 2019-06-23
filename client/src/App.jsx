import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import "./App.css";
import Admin from "./Admin";
import LoginPage from './components/LoginPage/LoginPage';
import store from './store';
import { loadUser } from 'actions/authActions'
import PrivateRoute from './components/PrivateRoute'

import routes from "./routes/routes";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from './components/Footer/Footer'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <Router>
            <div>

              <Switch>
                <Route exact path='/login' component={LoginPage} />
                <PrivateRoute path='/Admin' component={Admin} />

                <Route path='/'>
                  <div className="App">
                    <Header />
                    <CostumRoute exact route={routes.home} />
                    <CostumRoute route={routes.article} />
                    <CostumRoute route={routes.profile} />
                    <Footer />
                  </div>
                </Route>

              </Switch>

            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

const CostumRoute = ({ route, ...rest }) => <Route {...rest} key={route.path} component={route.component} path={route.path}></Route>


export default App;
