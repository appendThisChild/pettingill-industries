import React from "react"
import Image from "../images/Fotolia_91108174_Subscription_Monthly_M.jpg"

const WebDevSection3 = ({ open }) => {

    return(
        <div className="webDevSectionContainer" style={{ backgroundImage: `url(${Image})`, color: "white", paddingTop: open ? "25px" : "", paddingBottom: open ? "25px" : ""}}>
            <div className="webDevSection" style={{ width: open ? `${window.innerWidth * .66 }px` : ""}}>
                <h1><span>&#x2632;</span> Streamline Processes</h1>
                <p>Talking about the possibility of how having your own website might change or simplify your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
    )
}

export default WebDevSection3;