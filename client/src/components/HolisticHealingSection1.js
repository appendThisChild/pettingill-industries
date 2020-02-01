import React from "react"

// import Image from "../images/flower-of-life-1601160_960_720.webp"
import Image from "../images/sacred-geometry-vector-illustrations-vol-3-black-05.png"


const holisticHealingSection1 = ({ open }) => {

    return(
        <div className="holisticHealingSectionContainer" style={{ flexDirection: "row-reverse"}}>
            <div className="holisticHealingSection" style={{ marginLeft: open ? "25px" : ""}}>
                <h1><span>&#x2631;</span> Uncover Tranquility</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={Image} alt=""/>
        </div>
        
    )
}

export default holisticHealingSection1;