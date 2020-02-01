import React from 'react'
import useReactRouter from 'use-react-router'


const Header = ({ color }) => {
    const { history } = useReactRouter()
    return(
        <>
            <header className="header" style={{backgroundImage: `radial-gradient(${color}, black)`}}>
                <div>
                    <div>
                        <p onClick={() => history.push("/")}>Pettingill</p>
                        <p onClick={() => history.push("/")}>Industries</p>
                        <span>LLC</span>
                    </div>
                    <aside>
                        <aside>f</aside>
                        <aside>c</aside>
                        <aside>i</aside>
                        <aside>t</aside>
                    </aside>
                </div>
            </header>
            <nav className="nav">
                
            </nav>
        </>
    )
}

export default Header;