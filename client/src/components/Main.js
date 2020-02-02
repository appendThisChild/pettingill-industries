import React, { useState } from "react"

const Main = props => {
    const [ on, setOn ] = useState("")
    const { history } = props
    const link = endpoint => {
        setTimeout(() => {
            history.push(`/${endpoint}`)
        }, 750)
    }
    return(
        <>
            <div className="home">
                <section onClick={() => {setOn("section"); link("website-development")}} className={on === "section" ? "expanded" : ""}>
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