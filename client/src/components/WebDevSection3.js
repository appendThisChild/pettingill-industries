import React from "react"
import Image from "../images/112-1122330_technology-high-tech-line-euclidean-vector-abstract-white.png"

const WebDevSection3 = ({ open }) => {

    return(
        <div className="webDevSectionContainer" style={{ backgroundImage: `url(${Image})`, borderLeft: open ? "1px solid black" : ""}}>
            <div className="webDevSection">
                <h1>Capture your Essence</h1>
                <p>Talking about design and it's impact on you image as a company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
    )
}

export default WebDevSection3;