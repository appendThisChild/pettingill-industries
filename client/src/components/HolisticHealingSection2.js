import React from "react"

import Image from "../images/2.RED-WOOD-PATTERN.jpg"

const holisticHealingSection2 = ({ open }) => {

    return(
        <div className="holisticHealingSectionContainer" style={{ backgroundImage: `url(${Image})`, color: "white" }}>
            <div className="holisticHealingSection" style={{ width: open ? `${window.innerWidth / 3 * 2}px` : ""}}>
                <h1><span>&#x2636;</span> Build Foundations</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
    )
}

export default holisticHealingSection2;