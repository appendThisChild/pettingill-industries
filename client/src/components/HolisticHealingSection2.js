import React from "react"

import Image from "../images/2.RED-WOOD-PATTERN.jpg"

const holisticHealingSection2 = ({ open }) => {

    return(
        <div className="holisticHealingSectionContainer" style={{ backgroundImage: `url(${Image})`, color: "white" }}>
            <div className="holisticHealingSection" style={{ width: open ? `${window.innerWidth / 3 * 2}px` : ""}}>
                <h1><span>&#x2636;</span> Build Foundations</h1>
                <p>Every organ in our bodies has a natural or ‘healthy’ state of functioning as do our emotional, mental and spiritual states. When we are out of balance, we feel like something is out of place – whether it comes in the form of emotional or physical pain or discomfort – and we naturally want to return to our natural state of harmony, when everything ‘works’ as intended. This process of rebalancing is synonymous with healing.</p>
            </div>
        </div>
        
    )
}

export default holisticHealingSection2;