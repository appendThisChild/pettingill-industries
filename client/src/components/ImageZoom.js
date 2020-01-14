import React, { useEffect, useState } from 'react'

import { useImageZoom } from "../context/ImageZoomProvider.js"

const ImageZoom = () => {
    const { open, image, exitZoom } = useImageZoom();
    const [offSet, setOffSet] = useState([window.scrollX, window.scrollY]);
    const handleScroll = () => setOffSet([window.scrollX, window.scrollY]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return(
        <div className="imageZoom" style={{ display: open ? "" : "none", top: offSet[1]}}>
            <span onClick={exitZoom}>&#x2715;</span>
            <img src={image} alt="" />
        </div>
    )
}

export default ImageZoom;