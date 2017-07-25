import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import createStore from "./store"
import routes from "./routes"
import "./index.scss"

// import registerServiceWorker from "./registerServiceWorker"

const store = createStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            { routes }
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)
// registerServiceWorker()
