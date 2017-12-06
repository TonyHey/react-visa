import React from "react"
import { Switch, Route } from "react-router-dom"
// import { CSSTransitionGroup } from "react-transition-group"
// import Bundle from "../components/bundle"
// import styles from "./router.scss"
import App from "../container/App"
import Login from "../pages/login"


// const App = props => (
//     <Bundle load={() => import("../container/App")}>
//         {Component => <Component {...props} />}
//     </Bundle>
// )
// const Login = props => (
//     <Bundle load={() => import("../pages/login")}>
//         {Component => <Component {...props} />}
//     </Bundle>
// )

const routes = () => (
    <Switch>
        <Route location={location} key={`${location.key}_0`} path="/login" component={Login} />
        <Route location={location} key={`${location.key}_1`} path="/" component={App} />
    </Switch>
)

export default routes
