import React from "react"
import Image from "../images/circuit-vector-techno-3.png"

const WebDevSection2 = ({ open }) => {

    return(
        <main className="webDevSectionContainer" style={{ backgroundImage: `url(${Image})`, borderRight: open ? "1px solid black" : ""}}>
            <div className="webDevSection">
                <h1>Streamline Vital Processes</h1>
                <p>Talking about the possibility of how having your own website might change or simplify your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </main>
        
    )
}

export default WebDevSection2;