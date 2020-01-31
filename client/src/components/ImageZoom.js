import React, { useEffect, useState, useRef } from 'react'

import { useImageZoom } from "../context/ImageZoomProvider.js"

const ImageZoom = () => {
    const { open, image, exitZoom } = useImageZoom();
    const zoomed = useRef()

    const [offSet, setOffSet] = useState([window.scrollX, window.scrollY]);
    const [zoomXOffSet, setZoomXOffSet] = useState(0);

    const handleScroll = () => setOffSet([window.scrollX, window.scrollY]);
    const handleInsideScroll = (value) => setZoomXOffSet(value);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return(
        <div className="imageZoom" onScroll={() => handleInsideScroll(zoomed.current.getBoundingClientRect().left)} style={{ display: open ? "" : "none", top: offSet[1]}}>
            <span onClick={exitZoom} style={{ right: `${zoomXOffSet}px`}}>&#x2715;</span>
            <img ref={zoomed} src={image} alt="" />
        </div>
    )
}

export default ImageZoom;