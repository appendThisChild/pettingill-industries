import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"

import { ContactMessageProvider } from "./context/ContactMessageProvider.js"
import { ToastProvider} from "react-toast-notifications"
import { PortfolioProvider } from "./context/PortfolioProvider.js"

import CustomToast from "./components/CustomToast.js"

ReactDOM.render( 
<BrowserRouter>
    <PortfolioProvider>
        <ContactMessageProvider>
            <ToastProvider
                autoDismissTimeout={4000}
                components={{ Toast: CustomToast }}
            >
                <App />
            </ToastProvider>
        </ContactMessageProvider>
    </PortfolioProvider>
</BrowserRouter>
,
document.getElementById("root"))