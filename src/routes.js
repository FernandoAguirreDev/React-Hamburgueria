import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home"
import Order from "./pages/order"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact Path="/order" component={Order} />
            </Switch>
        </Router>
    )
}

export default Routes