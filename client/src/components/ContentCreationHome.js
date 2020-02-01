import React, { useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import SlideShow from "./SlideShow.js"
import ImageZoom from "./ImageZoom.js"

// providers
import { ImageZoomProvider } from "../context/ImageZoomProvider.js"
import ContentCreationSection1 from "./ContentCreationSection1.js"
import ContentCreationSection2 from "./ContentCreationSection2.js"

const ContentCreationHome = props => {
    const width = window.innerWidth;
    let open = false;
    if (width >= 768) open = true;
    useEffect(() => {
        window.scroll(0,0)

    }, [])
    
    return(
        <>
            <ImageZoomProvider>
                <ImageZoom />
                <Header color={"tan"} />
                <SlideShow />
                <ContentCreationSection1 open={open} />
                <ContentCreationSection2 open={open} />
                <Footer color={"tan"} />
            </ImageZoomProvider>
        </>
    )
}

export default ContentCreationHome;