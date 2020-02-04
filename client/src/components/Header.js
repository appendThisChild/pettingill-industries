import React from 'react'
import useReactRouter from 'use-react-router'

import { useContactMessage } from "../context/ContactMessageProvider.js"

const Header = ({ color }) => {
    const { setSecretCode } = useContactMessage()
    const { history } = useReactRouter()

    const sendTo = num => {
        setSecretCode(prev => {
            prev.shift();
            prev.push(num);
            const secret = [1, 1, 2, 2, 2, 3, 3, 4]
            const secretUnlock = prev.every((number, i) => number === secret[i])
            if (secretUnlock){
                history.push("/hf83gsk94ybs892h0jfn3")
            } else if (num === 1){
                history.push("/website-development")
            } else if (num === 2) {
                history.push("/content-creation")
            } else if (num === 3) {
                history.push("/holistic-healing")
            } else if (num === 4) {
                history.push("/contact-us")
            }
            return prev
        })
    }
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
                        <aside onClick={() => sendTo(1)}>&#x2634;</aside>
                        <aside onClick={() => sendTo(2)}>&#x2630;</aside>
                        <aside onClick={() => sendTo(3)}>&#x2631;</aside>
                        <aside onClick={() => sendTo(4)}>&#x2633;</aside>
                    </aside>
                </div>
            </header>
            <nav className="nav">
                
            </nav>
        </>
    )
}

export default Header;