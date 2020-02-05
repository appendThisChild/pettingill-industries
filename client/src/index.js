import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"

import { ContactMessageProvider } from "./context/ContactMessageProvider.js"
import { ToastProvider} from "react-toast-notifications"

import CustomToast from "./components/CustomToast.js"

ReactDOM.render( 
<BrowserRouter>
    <ContactMessageProvider>
        <ToastProvider
            autoDismissTimeout={4000}
            components={{ Toast: CustomToast }}
        >
            <App />
        </ToastProvider>
    </ContactMessageProvider>
</BrowserRouter>
,
document.getElementById("root"))