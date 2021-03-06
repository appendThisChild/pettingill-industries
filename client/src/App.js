import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Main from "./components/Main.js"
import WebDevHome from "./components/WebDevHome.js"
import ContentCreationHome from "./components/ContentCreationHome.js"
import HolisticHealingHome from "./components/HolisticHealingHome.js"
import ContactUs from "./components/ContactUs.js"
import Login from "./components/Login.js"

const App = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" render={renderProps => <Main {...renderProps}/>}/>
                <Route path="/website-development" render={renderProps => <WebDevHome {...renderProps}/>}/>
                <Route path="/content-creation" render={renderProps => <ContentCreationHome {...renderProps}/>}/>
                <Route path="/holistic-healing" render={renderProps => <HolisticHealingHome {...renderProps}/>}/>
                <Route path="/contact-us" render={renderProps => <ContactUs {...renderProps}/>}/>
                <Route path="/hf83gsk94ybs892h0jfn3" render={renderProps => <Login {...renderProps}/>}/>
            </Switch>
        </>
    )
}

export default App;