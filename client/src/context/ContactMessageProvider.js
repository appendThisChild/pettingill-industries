import React, { useContext, useState, useMemo } from 'react'
import axios from 'axios'

const ContactMessageContext = React.createContext()

const ContactMessageProvider = props => {
    const [ secretCode, setSecretCode ] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    const secretMeno = useMemo(() => ({ secretCode, setSecretCode }), [secretCode])

    const sendMessage = (message, callback) => {
        axios.post("/contactMessage", message)
            .then(res => callback(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <ContactMessageContext.Provider 
            value={{
                ...secretMeno,
                sendMessage,

            }}
            {...props}
        />
    )
}

const useContactMessage = () => {
    const context = useContext(ContactMessageContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { ContactMessageProvider, useContactMessage }