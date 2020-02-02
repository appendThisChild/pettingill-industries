import React from "react"
import Image from "../images/Fotolia_91108174_Subscription_Monthly_M.jpg"

const WebDevSection3 = ({ open }) => {

    return(
        <div className="webDevSectionContainer" style={{ backgroundImage: `url(${Image})`, color: "white", paddingTop: open ? "25px" : "", paddingBottom: open ? "25px" : ""}}>
            <div className="webDevSection" style={{ width: open ? `${window.innerWidth / 3 * 2}px` : ""}}>
                <h1><span>&#x2632;</span> Streamline Vital Processes</h1>
                <p>Efficiency and productivity rank as high priorities for businesses in the modern economy. Doing more with less while improving quality endures as the noblest of goals and the hallmark of every successful firm. Although the elusiveness of such achievements has frustrated companies in the past; with us, we will use technology to make them more accessible now than ever before.</p>
            </div>
        </div>
        
    )
}

export default WebDevSection3;