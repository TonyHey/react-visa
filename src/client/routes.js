import React from "react"
import { Switch, Route } from "react-router"
import App from "./container/App"
import Login from "./pages/login"


const routes = (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
    </Switch>
)

export default routes
