import React from "react";
import { Route } from "react-router-dom";
import Header from './components/Header/AdminHeader'
import "./App.css";

import Home from './components/Admin/Home';
import NewArticle from "./components/Admin/NewArticle/NewArticle";

export default function Admin({ match }) {

    const parent = match.path
    return (
        <div className="App">

            <div>
                <Header url={parent} />
                <Route path={`${parent}/NewArticle/:id?`} component={NewArticle} />
                <Route exact path={`${parent}`} component={Home} />
            </div>

        </div>
    );
}
