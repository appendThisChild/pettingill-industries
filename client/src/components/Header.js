import React from 'react'
import useReactRouter from 'use-react-router'


const Header = ({ color }) => {
    const { history } = useReactRouter()
    return(
        <>
            <header className="header" style={{backgroundImage: `radial-gradient(${color}, black)`}}>
                <div>
                    <div>
                        <p>Pettingill</p>
                        <p>Industries</p>
                        <span>LLC</span>
                    </div>
                    <aside>
                        <aside onClick={() => history.push("/website-development")}>&#x2634;</aside>
                        <aside onClick={() => history.push("/content-creation")}>&#x2630;</aside>
                        <aside onClick={() => history.push("/holistic-healing")}>&#x2631;</aside>
                        <aside onClick={() => history.push("/contact-us")}>&#x2633;</aside>
                    </aside>
                </div>
            </header>
            <nav className="nav">
                
            </nav>
        </>
    )
}

export default Header;