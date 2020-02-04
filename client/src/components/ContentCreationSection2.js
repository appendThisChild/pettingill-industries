import React from 'react'

import Image from "../images/VdKh27.jpg"

const ContentCreationSection2 = ({ open }) => {
    return(
        <div className="contentCreationSectionContainer" style={{backgroundImage: `url(${Image})`, color: "white"}}>
            <section className="contentCreationSection" style={{ width: open ? `${window.innerWidth / 3 * 2}px` : ""}}>
                <h1><span>&#x2637;</span> From Concept to Creation</h1>
                <p>Content creation is the process of generating topic ideas that appeal to your buyer persona, creating written or visual content around those ideas, and making that information accessible to your audience.</p>
                <p style={{ paddingTop: "25px"}}>What we provide:</p>
                <ul style={{ paddingTop: "10px"}}>
                    <li>Blogs</li>
                    <li>Videos</li>
                    <li>Photographs</li>
                    <li>Infographics</li>
                    <li>Testimonials</li>
                </ul>
            </section>
        </div>
    )
}

export default ContentCreationSection2;