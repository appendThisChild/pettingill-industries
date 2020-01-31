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

    useEffect(() => {
        window.scroll(0,0)

    }, [])
    
    return(
        <>
            <ImageZoomProvider>
                <ImageZoom />
                <Header />
                <ContentCreationSection1 />
                <SlideShow />
                <ContentCreationSection2 />
                <Footer />
            </ImageZoomProvider>
        </>
    )
}

export default ContentCreationHome;