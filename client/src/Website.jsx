import React, { Component } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import './App.css'

import routes from "./routes/Routes";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from './components/Footer/Footer'

export default class WebSite extends Component {
    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        <Header />
                        <Switch>
                            {routes.map(({ path, Component }) => (
                                <Route key={path} exact path={path}>
                                    {({ match }) => (
                                        <CSSTransition in={match != null} timeout={500} classNames="page" unmountOnExit>
                                            <Component {...{ match }} />
                                        </CSSTransition>
                                    )}
                                </Route>
                            ))}
                        </Switch>

                        <Footer />

                    </div>
                </Router>

            </div>
        );
    }
}
