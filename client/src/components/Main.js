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
                <section onClick={() => setOn("section")} className={on === "section" ? "expanded" : ""}>
                    <div onClick={() => link("website-development")}>
                        Website Development
                    </div>
                </section>
                <main onClick={() => setOn("main")} className={on === "main" ? "expanded" : ""}>
                    <div onClick={() => link("content-creation")}>
                        Content Creation
                    </div>
                </main>
                <article onClick={() => setOn("article")} className={on === "article" ? "expanded" : ""}>
                    <div onClick={() => link("holistic-healing")}>
                        Holistic Healing
                    </div>
                </article>
            </div>
        </>
    )
}

export default Main;