import React, { useState } from "react"

import { usePortfolio } from "../context/PortfolioProvider.js"

const Main = props => {
    const { testPhoto } = usePortfolio()
    const [ on, setOn ] = useState("")
    const { history } = props
    const link = endpoint => {
        setTimeout(() => {
            history.push(`/${endpoint}`)
        }, 750)
    }
    
    // console.log(testPhoto)
    return(
        <>
            <div className="home">
                <section onClick={() => {setOn("section"); link("website-development")}} className={on === "section" ? "expanded" : ""} style={{ backgroundImage: `url(${testPhoto})`}}>
                    <div>
                        Website Development
                    </div>
                </section>
                <main onClick={() => {setOn("main"); link("content-creation")}} className={on === "main" ? "expanded" : ""}>
                    <div>
                        Content Creation
                    </div>
                </main>
                <article onClick={() => {setOn("article"); link("holistic-healing")}} className={on === "article" ? "expanded" : ""}>
                    <div>
                        Holistic Healing
                    </div>
                </article>
            </div>
        </>
    )
}

export default Main;