import React from "react"

// import Image from "../images/flower-of-life-1601160_960_720.webp"
import Image from "../images/sacred-geometry-vector-illustrations-vol-3-black-05.png"


const holisticHealingSection1 = ({ open }) => {

    return(
        <div className="holisticHealingSectionContainer" style={{ flexDirection: "row-reverse"}}>
            <div className="holisticHealingSection" style={{ marginLeft: open ? "25px" : ""}}>
                <h1><span>&#x2631;</span> Uncover Tranquility</h1>
                <p>When we heal holistically, we address imbalances on all levels, rather than one or two, and so it becomes a life-long process in achieving overall life balance. The ultimate goal of aligning the body, mind and soul promises a happier, healthier, more balanced state of being.</p>
                <p style={{ paddingTop: "25px"}}>What we provide:</p>
                <ul style={{ paddingTop: "10px"}}>
                    <li>Guided Meditations</li>
                    <li><a href={"https://www.mtmscheduling.com/"}>Massage Therapy</a></li>
                    <li>Reiki</li>
                    <li>Sound Therapy</li>
                    <li>Yoga</li>
                </ul>
            </div>
            <img src={Image} alt=""/>
        </div>
        
    )
}

export default holisticHealingSection1;