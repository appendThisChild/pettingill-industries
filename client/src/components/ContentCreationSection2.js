import React from 'react'

import Image from "../images/VdKh27.jpg"

const ContentCreationSection2 = ({ open }) => {
    return(
        <div className="contentCreationSectionContainer" style={{backgroundImage: `url(${Image})`, color: "white"}}>
            <section className="contentCreationSection" style={{ width: open ? `${window.innerWidth / 3 * 2}px` : ""}}>
                <h1><span>&#x2637;</span> From Concept to Creation</h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                </ul>
            </section>
        </div>
    )
}

export default ContentCreationSection2;