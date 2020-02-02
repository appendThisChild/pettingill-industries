import React, { useState, useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import HolisticHealingSection1 from "./HolisticHealingSection1.js"
import HolisticHealingSection2 from "./HolisticHealingSection2.js"


const HolisticHealingHome = props => {
    const [offSet, setOffSet] = useState([window.scrollX, window.scrollY]);

    const width = window.innerWidth;
    let open = false;
    if (width >= 768) open = true;

    const handleScroll = () => setOffSet([window.scrollX, window.scrollY]);
    useEffect(() => {
        window.scroll(0,0)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return(
        <>
        <Header color={"darkorange"}/>
        <div className="holisticImageBreak" style={{ backgroundPosition: `50% -${offSet[1]}px`}}></div>
        <HolisticHealingSection1 open={open} />
        <HolisticHealingSection2 open={open} />
        <Footer color={"darkorange"}/>
        </>
    )
}

export default HolisticHealingHome;