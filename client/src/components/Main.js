import React from "react"
import { Link } from "react-router-dom"

// components
import Footer from "./Footer.js"

const Main = props => {

    return(
        <>
            <div className="home">
                <section>
                        <Link to="/website-development" >
                            <span>Website</span>
                            <span>Development</span>
                        </Link>
                </section>
                <main>
                    <Link to="/content-creation" >Content Creation</Link>
                </main>
                <article>
                    <Link to="/holistic-healing" >Holistic Healing</Link>
                </article>
            </div>
            <Footer />
        </>
    )
}

export default Main;