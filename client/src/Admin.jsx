import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header/AdminHeader'
import "./App.css";

import Home from './components/Admin/Home';
import NewArticle from "./components/Admin/NewArticle/NewArticle";

export default class Admin extends Component {
    render() {
        const { match } = this.props

        return (
            <div className="App">

                <Router>
                    <div>
                        <Header url={match.path} />
                        <Switch>
                            <Route path={`${match.path}/NewArticle/`} component={NewArticle} />
                            <Route path={`${match.path}/`} component={Home} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}
