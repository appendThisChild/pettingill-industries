import React, { useContext, useState, useEffect } from 'react'
import axios from "axios"

const PortfolioContext = React.createContext()

const PortfolioProvider = props => {
    const [ testPhoto, setTestPhoto ] = useState('')

    const firstRequest = () => {
        // console.log("Hey")
        axios.post('/portfolioAccess', { something: "something" })
            .then(res => setTestPhoto(`data:image/png;base64,${res.data}`))
            .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        firstRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <PortfolioContext.Provider 
            value={{
                testPhoto
            }}
            {...props}
        />
    )
}

const usePortfolio = () => {
    const context = useContext(PortfolioContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { PortfolioProvider, usePortfolio }