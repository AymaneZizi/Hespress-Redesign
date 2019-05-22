import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import indexRoutes from "./routes/Routes";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from './components/Footer/Footer'
import Home from './components/Home'

export default class WebSite extends Component {
    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            {indexRoutes.map((prop, key) => {
                                return (
                                    <Route exact path={prop.path} component={prop.component} key={key} />
                                );
                            })}
                        </Switch>

                        <Footer />

                    </div>
                </Router>

            </div>
        );
    }
}
