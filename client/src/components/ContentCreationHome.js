import React, { useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import SlideShow from "./SlideShow.js"
import ImageZoom from "./ImageZoom.js"

// providers
import { ImageZoomProvider } from "../context/ImageZoomProvider.js"

const ContentCreationHome = props => {

    useEffect(() => {
        window.scroll(0,0)

    }, [])
    
    return(
        <>
            <ImageZoomProvider>
                <ImageZoom />
                <Header />
                <SlideShow />

                <Footer />
            </ImageZoomProvider>
        </>
    )
}

export default ContentCreationHome;