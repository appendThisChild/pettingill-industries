import React from 'react'

import Image from "../images/ornament-design-png-1.png"

const ContentCreationSection1 = ({ open }) => {
    return(
        <div className="contentCreationSectionContainer" style={{ flexDirection: "row-reverse"}}>
            <section className="contentCreationSection" style={{ marginLeft: open ? "25px" : ""}}>
                <h1><span>&#x2630;</span> Shape Lifelong Impressions</h1>
                <p>Content creation is the ultimate inbound marketing practice. When you create content, you’re providing free and useful information to your audience, attracting potential customers to your website, and retaining existing customers through quality engagement. Content is a large part of our everyday life. It keeps us informed, answers our questions, entertains us, makes us smile, guides our decisions, and more.</p>
            </section>
            <img src={Image} alt=""/>
        </div>
    )
}

export default ContentCreationSection1;