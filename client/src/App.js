import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Main from "./components/Main.js"

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" render={renderProps => <Main {...renderProps}/>}/>
            </Switch>
        </div>
    )
}

export default App;